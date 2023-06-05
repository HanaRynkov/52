function getFiveAfterSevenSeconds() {
    setTimeout(() => {
        return 5;
    }, 7000)
}

const result = getFiveAfterSevenSeconds(); // undefined - синхронный код не дождался значения
console.log(result);

let promise1 = new Promise(function (resolved, reject) {
    setTimeout(() => {
        resolved(5);
    }, 7000)
});
console.log(promise1);

let promise2 = new Promise(function (resolved, reject) {
    setTimeout(() => {
        reject(new Error('Ошибка, некорректное поведение'));
    }, 7000)
});

promise1
    .then(value => console.log(value));

promise2
    .catch(err => console.log(err));
