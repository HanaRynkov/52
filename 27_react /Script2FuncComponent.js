// function Group() {
//     return (
//         <div>
//             <h2>Java 52</h2>
//         </div>
//     );
// }

const Group = () => {
   return (
       <div>
           <h2>Java 52</h2>
       </div>
   );
}

// сегодня deprecated, был актуален до предыдущей версии React (16)
// ReactDOM.render(<Group />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   // <React.Fragment> или <> - являются фрагментом, для оборачивания вёрстки
   // в один родительский тэг как этого требует метод render()
   <>
       {/* Пример комментария в синтаксисе JSX */}
       <Group />
       <Group />
       <Group />
   </>
);