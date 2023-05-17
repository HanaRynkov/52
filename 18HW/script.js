// Создайте объект bankAccount, представляющий банковский счет,
// со свойствами accountNumber, accountHolderName и
// balance. Добавьте способы ввода deposit() и вывода
// денег со счета withdraw(), а также способ проверки баланса checkBalance().

const bankAccount = {
    accountNumber: '178',
    accountHolderName: 'Hanna_Rynkov',
    balance: 1000,
    checkBalance: function () {
        console.log(this.balance);
    },
    deposit: function (addNum) {
        this.balance = this.balance + addNum;
    },
    withdraw: function (addNum) {
        this.balance = thise.balance - addNum;
    },
};


const bankAccount = {
    accountNumber: '178',
    accountHolderName: 'Hanna_Rynkov',
    balance: 1000,
    deposit(sum) {
        if (sum < = 0) return;
        sum > 10000 ?
            console.log('Требуется подтверждение легальности доходов') :
            this.balance += sum;

    },
    withdraw(sum) {
        sum <= thise.balance ?
            thise.balance -= sum :
            console.log('Insufficient funds');
    }

    checkBalance() {
        console.log(this.balance);
    };
};


bankAccount.checkBalance(); // Account balance is 1000
bankAccount.deposit(500);
bankAccount.checkBalance(); // Account balance is 1500
bankAccount.withdraw(700);
bankAccount.checkBalance(); // Account balance is 800
bankAccount.withdraw(1000); // Insufficient funds

// Необязательно, сложнее, по желанию:
// Создайте объект shoppingCart, представляющий корзину для покупок со
// свойствами товаров и общей стоимостью. Добавьте методы добавления
// товаров в корзину addItem(item), удаления товаров из корзины removeItem(itemName) 
// и расчета общей стоимости товаров в корзине. Свойство "items" должно быть массивом
// объектов, представляющих товары в корзине, причем каждый объект имеет
// свойства для имени, цены и количества. Свойство totalCost
// должно быть суммой цены каждого предмета, умноженной на его количество.

const shoppingCart = {
    items: [], // массив товаров 
    totalCost: 0,// суммарная стоимость товаров 
    addItem(item) {
        const existingItem = this.items.find(e => e.name === item.name); // итерируем (перебираем) массив айтемов e это каждый элемент

        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            if (itemName && item.price > 0 && item.quantity > 0) {
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
        this.totalCost = this.items.reduce((acc, item) =>  acc + item.quantity * item.price);
    }


}




shoppingCart.addItem({ name: "Shirt", price: 20, quantity: 2 });
shoppingCart.addItem({ name: "Pants", price: 30, quantity: 1 });
console.log(shoppingCart.totalCost); // Output: 70
shoppingCart.removeItem("Shirt");
console.log(shoppingCart.totalCost); // Output: 30
