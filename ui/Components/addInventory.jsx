import {Link} from 'react-router-dom'
import {useState} from 'react'

const AddInventory = () =>{
  const [newBrand, setNewBrand] = useState('Gildan')
  const [newColor, setNewColor] = useState()
  const [newStyle, setNewStyle] = useState()
  const [newSize, setNewSize] = useState()
  const [newQuantity, setNewQuantity] = useState()
  const [newLocation, setNewLocation] = useState()
  const [newShirt, setNewShirt] = useState({})

  const addBrand = () => {
    setNewBrand(event.target.value)
  }

  const addColor = () => {
    setNewColor(event.target.value)
  }

  const addStyle = () => {
    setNewStyle(event.target.value)
  }

  const addSize = () => {
    setNewSize(event.target.value)
  }

  const addQuantity = () => {
    setNewQuantity(event.target.value)
  }

  const addLocation = () => {
    setNewLocation(event.target.value)
  }

  const addNewInventory = () =>{
    setNewShirt({
        "brand": addBrand,
        "color": addColor,
        "style": addStyle,
        "size": addSize,
        "quantity": addQuantity,
        "location": addLocation
    })
    console.log(newShirt)
  }

  return(
    <>
    <h1>Add Inventory</h1>
    <form>
    <input type='text' placeholder = 'Brand (Gildan if blank)' onChange = {addBrand}/>
    <input type='text' placeholder = 'Color(Required)' onChange = {addColor}/>
    <input type='text' placeholder = 'Style' onChange = {addStyle}/>
    <select name = 'size' onChange = {addSize}>
    <option value = 'select'>select</option>
      <option value ='XS'>XS</option>
      <option value ='S'>S</option>
      <option value ='M'>M</option>
      <option value ='L'>L</option>
      <option value ='XL'>XL</option>
      <option value ='XXL'>XXL</option>
    </select>
    <input type='number' placeholder = 'Quantity' onChange = {addQuantity}/>
    <input type='text' placeholder = 'Location' onChange = {addLocation}/>
    <button onClick = {addNewInventory}>Add</button>
    </form>
    <Link to = '/'>Home</Link>
    </>
  )
}



export default AddInventory