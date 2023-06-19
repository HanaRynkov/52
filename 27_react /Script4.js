class Group extends React.Component {
    render() {
        const subTitle = 'Tel Ran programm ' + (Math.random() * 10).toFixed(1);
        return (
            <>
                <h1>Java 52</h1>
                <h3>{subTitle} {3 * 5}</h3>
            </>
        );
    }
}

// сегодня deprecated, был актуален до предыдущей версии React (16)
// ReactDOM.render(
//     <>
//         <Group />
//         <Group />
//         <Group />
//     </>
//     , document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Group />
        <Group />
        <Group />
    </>
)