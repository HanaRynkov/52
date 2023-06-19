// Метод render() призван отобразить элементы на странице
// Метод render() первым атрибутом принимает разметку, внутри может быть только 1 корневой элемент

// Метод render() сегодня deprecated, был актуален до предыдущей версии React (16)
// ReactDOM.render(
//     <div>
//         <h1>Hello world!</h1>
//         <div>Hello from div!</div>
//     </div>, document.getElementById('root')
// );

// в const root помещена информация о том, с каким элементом мы работаем
const root = ReactDOM.createRoot(document.getElementById("root"));
// В root отображаем то, что передаем в качестве параметра методу render()
// При новом использовании метода в качестве параметра передаётся
// только 1 параметр с контентом, который хотим отобразить
root.render(
    <div>
        <h1>Hello world!</h1>
        <div>Hello from div!</div>
    </div>
);