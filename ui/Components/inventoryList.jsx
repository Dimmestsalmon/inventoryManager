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

if(inventory){
  return(
    <>
      <h1>Inventory List</h1>
      {inventory.map((shirt)=>{
        return (
        <ul>
          <li>{shirt.brand}</li>
          <li>{shirt.color}</li>
          <li>{shirt.location}</li>
          <li>{shirt.quantity}</li>
          <li>{shirt.size}</li>
          <li>{shirt.style}</li>
        </ul>
        )})}
        <Link to = '/'>Home</Link>
      </>
  )
}}

export default InventoryList;