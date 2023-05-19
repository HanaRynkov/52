const bankAccount = {
    accountNumber: "1234567890",
    accountHolderName: "Alice",
    balance: 1000,
    deposit(sum) {
        if (sum <= 0) return;
        sum > 100000
            ? console.log("Требуется подтверждение легальности доходов")
            : (this.balance += sum);
    },
    withdraw(sum) {
        sum <= this.balance
            ? (this.balance -= sum)
            : console.log("Insufficient funds");
    },
    checkBalance() {
        console.log(this.balance);
    },
};

const amount = document.getElementById('amount');
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const checkBalance = document.getElementById('checkBalance');
const balance = document.getElementById('balance');
deposit.onclick = depositHandler;
withdraw.onclick = withdrawHandler;
checkBalance.onclick = checkBalanceHandler;

function depositHandler() {
    const sum = +amount.value;
    bankAccount.deposit(sum);
    amount.value = '';

}
function withdrawHandler() {
    const sum = +amount.value;
    bankAccount.withdraw(sum);
    amount.value = '';
}

function checkBalance() {
    balance.textContent = bankAccount.balance;
}