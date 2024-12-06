import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import InventoryList from '../Components/inventoryList.jsx'
import AddInventory from '../Components/addInventory.jsx'
import CompareToOrder from '../Components/compareToOrder.jsx'

function App() {




  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
              <>
                <h1>Inventory Tracker</h1>
                <Link to="/inventoryList">Show Inventory</Link>
                <Link to="/addInventory">Add Inventory</Link>
                <Link to="/compareToOrder">Compare To Order</Link>
              </>
          }/>
          <Route path="/inventoryList" element={<InventoryList />} />
          <Route path="/addInventory" element={<AddInventory />} />
          <Route path="/compareToOrder" element={<CompareToOrder />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
