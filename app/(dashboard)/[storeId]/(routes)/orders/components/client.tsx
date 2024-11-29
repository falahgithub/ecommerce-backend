"use client";


import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { OrderColumn, columns } from "./column";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps{
  data: OrderColumn[]
}
const OrderClient:React.FC<OrderClientProps> = ({data}) => {
  const router = useRouter();
  const params = useParams();

  return ( <>
  <div className="flex items-center justify-between">
    <Heading title={`Orders (${data.length})`}
    description="Manage Orders for your store." />
    
    
  </div>
  <Separator />
  
  <DataTable columns={columns} data={data} searchKey="products"/>
  
  </> );
}
 
export default OrderClient;