"use client";

import { ColumnDef } from "@tanstack/react-table";


export type issue = {
  issueKey: string;
  summary: number;
  status: "pending" | "processing" | "success" | "failed";
  issueType: string;
  assignee: string;
};

export const columns: ColumnDef<issue>[] = [
  {
    accessorKey: "issueKey",
    header: "IssueKey",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "summary",
    header: "Summary",
  },
  {
    accessorKey: "issueType",
    header: "IssueType",
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
  }
];
