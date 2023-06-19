// class Student extends React.Component {
//     render() {
//         return (
//             <>
//                 <h1>{this.props.name}</h1>
//                 <h2>{this.props.age}</h2>
//             </>
//         );
//     }
// }

const Student = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
        </>
    );
};

// const Student = ({name, age}) => {
//     return (
//         <>
//             <h1>{name}</h1>
//             <h2>{age}</h2>
//         </>
//     );
// };

// сегодня deprecated, был актуален до предыдущей версии React (16)
// ReactDOM.render(
//     <>
//         <Student />
//         <Student />
//         <Student />
//     </>
//     , document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Student name="Peter" age={25 + 5} />
        <Student name="Mary" age={25 - 6} />
        <Student name="Tigran" age={25 + 3} />
    </>
);