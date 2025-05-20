import { neon } from "@neondatabase/serverless";
import Link from "next/link";


export default function AddInventory() {

    async function addShirt(formData: FormData) {
      "use server"
      const brand :FormDataEntryValue|null = formData.get('brand')
      const color :FormDataEntryValue|null = formData.get('color')
      const style :FormDataEntryValue|null = formData.get('style')
      const size :FormDataEntryValue|null = formData.get('size')
      const quantity :FormDataEntryValue|null = formData.get('quantity')
      const location :FormDataEntryValue|null = formData.get('location')
      const sql = neon(process.env.DATABASE_URL!);
      await sql("INSERT INTO inventory (brand, color, style, size, quantity, location) VALUES ($1, $2, $3, $4, $5, $6)", [brand, color, style, size, quantity, location])
    }



    return (

        <>
          <Link href="./">Return Home</Link>
          <div>Add Inventory</div>
          <form action={addShirt}>
            <input type="text" name="brand" placeholder="Brand"/>
            <input type="text" name="color" placeholder="Color"/>
            <input type="text" name="style" placeholder="Style"/>
            <input type="text" name="size" placeholder="Size"/>
            <input type="text" name="quantity" placeholder="Quantity"/>
            <input type="text" name="location" placeholder="Location"/>
            <button type="submit">Add Inventory</button>
          </form>

        </>
    );
  }