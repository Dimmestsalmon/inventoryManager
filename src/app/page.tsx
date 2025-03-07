import { auth } from "@/auth"
import {signIn, signOut} from "@/auth"
import Link from "next/link"

export default async function Home() {
  const session = await auth()

  if (!session?.user) {
    return (
        <form
            action={async () => {
              "use server"
              await signIn("google")
            }}
        >
          <button type="submit">Signin with Google</button>
        </form>
    )}
  else{
    return (
        <>
          <form
              action={async () => {
                "use server"
                await signOut()
              }}
          >
            <button type="submit">Sign Out</button>
          </form>
          <h1>Inventory Manager</h1>
          <h3>Welcome {session.user.name}</h3>
        <div>
          <Link href="/pages/inventoryList">Show Inventory</Link>
          <Link href="/pages/addInventory">Add Inventory</Link>
          <Link href="/pages/compareToOrder">Compare to Order</Link>
        </div>
        </>
    )
  }
}

