import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import {
  GridCellParams,
  GridRowsProp,
  GridColDef,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import moment from "moment";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Link from "next/link";

type SparkLineData = number[];

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString("en-US", {
    month: "short",
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderSparklineCell(params: GridCellParams<SparkLineData, any>) {
  const data = getDaysInMonth(4, 2024);
  const { value, colDef } = params;

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType="bar"
        showHighlight
        showTooltip
        colors={["hsl(210, 98%, 42%)"]}
        xAxis={{
          scaleType: "band",
          data,
        }}
      />
    </div>
  );
}

function renderStatus(status: "draft" | "requested" | "final") {
  const colors: { [index: string]: "success" | "warning" | "default" } = {
    draft: "default",
    requested: "warning",
    final: "success",
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

export function renderAvatar(
  params: GridCellParams<{ name: string; color: string }, any, any>
) {
  if (params.value == null) {
    return "";
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: "24px",
        height: "24px",
        fontSize: "0.85rem",
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "BTR",
  },
  {
    field: "status",
    headerName: "Status",

    renderCell: (params) => renderStatus(params.value as any),
  },
  {
    field: "route",
    headerName: "Route",
    flex: 1,
  },
  {
    field: "subject",
    headerName: "Subject",
    flex: 1,
  },
  {
    field: "staff_id",
    headerName: "ID Staff",
  },
  {
    field: "createdAt",
    headerName: "Date Time",
    flex: 1,
    minWidth: 200,
    renderCell: (params) => moment(params.value).format("YYYY-MM-DD hh:mm A"),
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 80,
    getActions(params: any) {
      const items = [];
      if (params.row.status === "requested") {
        items.push(
          <Link href={`/admin/request-list/${params.id}`} passHref>
            <GridActionsCellItem icon={<AddTaskIcon />} label="Detail" />
          </Link>
        );
      }
      return [...items];
    },
  },
];

export const rows: GridRowsProp = [
  {
    id: 515203,
    route: "Manado - Jakarta",
    subject: "Roster OFF",
    staff_id: "SMA241234",
    status: "final",
    createdAt: new Date().toISOString(),
  },
  {
    id: 515204,
    route: "Weda Bay - Makassar",
    subject: "Business Trip",
    staff_id: "SMA241234",
    status: "draft",
    createdAt: new Date().toISOString(),
  },
  {
    id: 515205,
    route: "Bakan - Manado",
    subject: "General",
    staff_id: "SMA241234",
    status: "requested",
    createdAt: new Date().toISOString(),
  },
  {
    id: 515206,
    route: "Toka Tindung - Jakarta",
    subject: "Roster OFF",
    staff_id: "SMA241234",
    status: "final",
    createdAt: new Date().toISOString(),
  },
];
