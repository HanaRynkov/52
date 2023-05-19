const shoppingCart = {
    items: [], // массив товаров 
    totalCost: 0,// суммарная стоимость товаров 
    addItem(item) {
        const existingItem = this.items.find(e => e.name === item.name); // итерируем (перебираем) массив айтемов e это каждый элемент

        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            if (item.name && item.price > 0 && item.quantity > 0) {
                this.items.push(item);
            }
        }
    },
    removeItem(itemName) {
        const index = this.items.findIndex(e => e.name === itemName);
        if (index !== -1) {
            this.items.splice(index, 1); // индекс какой элемент мы хотим удалить а 1 это сколько штук мы хотим удалить
            //this.items = this.items.filter((e, i) => i !== index);
        }
        this.updateTotalCost();
    },


    updateTotalCost() {
        this.totalCost = this.items.reduce((acc, item) => acc + item.quantity * item.price);
    }


}



const addButton = document.querySelector('#add');
const statsButton = document.getElementById('stats');
const productList = document.getElementById('productList');
console.log(addButton, statsButton);
addButton.onclick = addHandler;

statsButton.onclick = stastHandler;

//addButton.addEventListener('click', addHandler);
addButton.addEventListener('keydown', (e) => {
    //console,log(e);
    if (e.key === 'Enter') {
        addHandler();
    }
});

function addHandler() {
    const productName = document.getElementById('productName');
    const price = document.getElementById('price');
    const quantity = document.getElementById('quantity');
    shoppingCart.addItem({
        name: productName.value.trim(),
        price: +price.value,
        quantity: +quantity.value
    })

    productList.innerHTML = '';
    shoppingCart.items.forEach(e => {
        const li = document.createElement('li');
        li.textContent = `Product name: ${e.name}, Product price: ${e.price}, quantity of product: ${e.quantity}`;
        productList.append(li);
    })
}

function stastHandler() {
    let totalQty = 0;
    let totalCost = 0;



    shoppingCart.items.forEach(e => {
        totalQty += e.quantity;
        totalCost += e.price * e.quantity;

    })

    const prices = shoppingCart.items.map(e => {
        return e.price;
    })

    const max = Math.max(...prices);
    const min = Math.min(...prices);
    const avg = totalCost/totalQty;

    console.log(totalQty, totalCost,max,min);


    alert(`
        Total Qty: ${totalQty} \n
        Total Cost: ${totalCost} \n
        Min Cost: ${min} \n
        Max Cost: ${max} \n
        Avg Cost: ${avg.toFixed(2)} \n
        
    `)

   const statsContainer = document.getElementById('statsContainer');

   