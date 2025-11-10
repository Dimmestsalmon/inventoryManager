import { neon } from "@neondatabase/serverless";
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

async function removeItem(formData: FormData) {
    'use server';
    
    const id = formData.get('id') as string;
    
    try {
      await sql("DELETE FROM inventory WHERE id = $1", [id]);
    } catch {
      console.log("Remove item failed");
    }
  }
  const inventoryList: { id: number; brand: string; color: string; style: string; size: string; quantity: number; location: string  }[] = await getData();

  return (
      <>
        <Link href="./">Return Home</Link>
        <ul>
          {inventoryList.map((item: { id: number; brand: string; color: string; style: string; size: string; quantity: number; location: string  }) => (
              <li key={item.id}>
                {item.brand}{item.color}{item.style}{item.size}{item.quantity}{item.location}
                <button type="submit">remove</button>
              </li>
              
          ))}
          
        </ul>
      </>
  );
}