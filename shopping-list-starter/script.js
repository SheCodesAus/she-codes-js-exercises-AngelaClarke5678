let shoppingListItems = ['Milk', 'Bread', 'Cheese']
let shoppingList = document.getElementById('shopping-list-items')

shoppingListItems.forEach((item) => {
    console.log("Found: ", item)
    let itemElement = document.createElement("li")
    itemElement.innerText = item
    shoppingList.appendChild(itemElement)
})

function addItem() {
    let item = document.getElementById("new-item-text").value
    shoppingListItems.push(item)
    console.log(shoppingListItems);
    updateItems()    
}

function updateItems() {
    let shoppingList = document.getElementById('shopping-list-items')
    shoppingList.innerHTML = ''
    shoppingListItems.forEach((item) => {
        let itemElement = document.createElement("li")
        itemElement.innerText = item
        shoppingList.appendChild(itemElement) 
    })
}

function clearList() {
    // 1. i want to make the array empty
    shoppingListItems.length = 0
    console.log(shoppingListItems)
    updateItems() 
}