class Group extends React.Component {
    render() {
        return (
            <>
                <h3>Java 52</h3>
                <h3>Java 52</h3>
            </>
        );
    }
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