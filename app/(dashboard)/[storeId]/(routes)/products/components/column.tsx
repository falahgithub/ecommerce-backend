"use client"

import { ColumnDef } from "@tanstack/react-table"
import CellAction from "./cell-action"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductColumn = {
  id: string
  name: string
  price: string
  size: string
  color: string
  category: string
  isFeatured: Boolean
  isArchives: Boolean
  createdAt: string
}

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "isArchives",
    header: "Archives",
  },{
    accessorKey: "isFeatured",
    header: "Featured",
  },{
    accessorKey: "price",
    header: "Price",
  },{
    accessorKey: "category",
    header: "Category",
  },{
    accessorKey: "size",
    header: "Size",
  },{
    accessorKey: "color",
    header: "Color",
    cell: ({row})=>(
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div className="h-6 w-6 rounded-full border"
        style={{backgroundColor: row.original.color}}
        ></div>
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },{
    id: 'actions',
    header: "Actions",
    cell: ({row}) =><CellAction data={row.original} />
  }
]
