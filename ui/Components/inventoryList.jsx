import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


const InventoryList = () => {
  const [allInventory, setAllInventory] = useState(true)
  const [inventory, setInventory] = useState(undefined)

  const showInventory = () =>{
    console.log(allInventory)
    setAllInventory(!allInventory)
  }
  useEffect(()=>{
      fetch("http://localhost:8080/inventoryList")
        .then((res) => res.json())
        .then((data) => setInventory(data))
  }, [allInventory])

  const removeShirt = (id) =>{
    let newId = {id}

    fetch("http://localhost:8080/inventoryList", {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newId)
    })}

if(inventory){
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
              <td><button onClick = {() => removeShirt(shirt.id)}>Remove Shirt</button></td>
            </tr>

        )})}
        </tbody>
        </table>
        <Link to = '/'>Home</Link>
      </>
  )
}}

export default InventoryList;