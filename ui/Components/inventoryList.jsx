import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


const InventoryList = () => {
  const [renderAllInventory, setrenderAllInventory] = useState(true)
  const [inventory, setInventory] = useState(undefined)

  useEffect(()=>{
      fetch("http://localhost:8080/inventoryList")
        .then((res) => res.json())
        .then((data) => setInventory(data))
  }, [renderAllInventory])

  const pullShirt = (id) =>{
    let newId = {id}
    fetch("http://localhost:8080/inventoryList", {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newId)
    })
    .then(window.location.reload())
  }

  const deleteShirt = (id) =>{
    let newId = {id}
    fetch("http://localhost:8080/inventoryList", {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newId)
    })
    .then(setrenderAllInventory(!renderAllInventory))
  }

if(inventory === undefined){
  return (
    <h1>Loading</h1>
  )
}
  return(
    <>
      <h1>Inventory List</h1>
      <table>
          <thead>
            <tr>
              <th>BRAND</th>
              <th>COLOR</th>
              <th>STYLE</th>
              <th>SIZE</th>
              <th>QUANTITY</th>
              <th>LOCATION</th>
            </tr>
          </thead>
          <tbody>
      {inventory.map((shirt)=>{
        return (
            <tr>
              <td>{shirt.brand}</td>
              <td>{shirt.color}</td>
              <td>{shirt.style}</td>
              <td>{shirt.size}</td>
              <td>{shirt.quantity}</td>
              <td>{shirt.location}</td>
              <td><button onClick = {shirt.quantity === 1 ? () => deleteShirt(shirt.id) : () => pullShirt(shirt.id)}>Remove Shirt</button></td>
            </tr>

        )})}
        </tbody>
        </table>
        <Link to = '/'>Home</Link>
      </>
  )
}

export default InventoryList;