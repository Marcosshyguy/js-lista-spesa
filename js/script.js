// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const shoppingItem = ["pane", "salame", "prosciutto", "campari", "mortadella", "mango", "fizzbuzz"]

let shoppingList = document.querySelector(".shopping-list");

let shoppingItemHtml = "";

let i = 0
while(i < shoppingItem.length){
    const thisShoppingItem = shoppingItem[i];
    
    shoppingItemHtml = `<li class="items">${thisShoppingItem}</li>`;
    i++;
    
    console.log(shoppingItemHtml);
    shoppingList.innerHTML += shoppingItemHtml;
    
}
console.log(shoppingList);



// shoppingList.innerHTML += document.getElementsByClassName("item")[i];