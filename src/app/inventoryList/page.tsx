import { neon } from "@neondatabase/serverless";
import RemoveButton from "@/components/RemoveButton";
import Link from "next/link";

export default async function InventoryList() {
  const sql = neon(process.env.DATABASE_URL!);

  async function getData() {
    const list = await sql("SELECT * FROM inventory");
    return list as {
      id: number;
      brand: string;
      color: string;
      style: string;
      size: string;
      quantity: number;
      location: string;
    }[];
  }

  const inventoryList: { id: number; brand: string; color: string; style: string; size: string; quantity: number; location: string  }[] = await getData();

  return (
      <>
        <Link href="./">Return Home</Link>
        <ul>
          {inventoryList.map((item: { id: number; brand: string; color: string; style: string; size: string; quantity: number; location: string  }) => (
              <li key={item.id}>
                {item.brand}{item.color}{item.style}{item.size}{item.quantity}{item.location}
                <RemoveButton id={item.id} />
              </li>
              
          ))}
          
        </ul>
      </>
  );
}