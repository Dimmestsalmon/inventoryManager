import { neon } from "@neondatabase/serverless";
import Link from "next/link";
import { revalidatePath } from "next/cache";

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
      revalidatePath('/inventoryList');
    } catch {
      console.log("Remove item failed");
    }
  }
  
  const inventoryList = await getData();
  
  return (
    <>
      <Link href="./">Return Home</Link>
      <ul>
        {inventoryList.map((item) => (
          <li key={item.id}>
            {item.brand} {item.color} {item.style} {item.size} {item.quantity} {item.location}
            <form action={removeItem} style={{ display: 'inline' }}>
              <input type="hidden" name="id" value={item.id} />
              <button type="submit">remove</button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
}