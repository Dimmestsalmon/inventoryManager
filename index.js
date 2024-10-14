let inventory  ={ 
	shirt1:{
	color: "grey",
	size: "small",
	brand: "gildan",
	quantity: 4
	},
	shirt2:{
        color: "black",
        size: "small",
        brand: "bella",
        quantity: 5
        },
}

let needed = {

	shirt1:{
	color: "grey",
	size: "small",
	brand: "gildan",
	quantity: 6 
	}
}

function searchInventory(){
	//take input return all matches
}

function printInventory(){
	console.log(inventory);
}

function showInventoryToPurchase(){
	//take invnetory needed compare to on hand print difference
}

function inventoryNeeded(){
	let orderOrOnHand;
	if (needed.shirt1.quantity < inventory.shirt1.quantity){
		let extra = (inventory.shirt1.quantity - needed.shirt1.quantity)
		orderOrOnHand = `You have ${inventory.shirt1.quantity} on hand, order ${extra} amount.`
	}
	return orderOrOnHand;
}

console.log(inventoryNeeded());
