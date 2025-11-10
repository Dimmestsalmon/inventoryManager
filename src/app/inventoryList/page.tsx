import { neon } from "@neondatabase/serverless";
import Link from "next/link";

export default async function InventoryList() {
  async function getData() {
    const sql = neon(process.env.DATABASE_URL!);
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
                <button type = "button"> remove </button>
              </li>
              
          ))}
          
        </ul>
      </>
  );
}