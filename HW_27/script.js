
const Chess = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h2>{props.year}</h2>
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Chess name="Вильгельм Стейниц" year={"1886 - 1894"} />
        <Chess name="Эмануил Ласкер" year ={"1894 - 1921"} />
        <Chess name="Хосе Рауль Капабланка" year ={"1921-1927"} />
        <Chess name="Александр Алехин" year ={"1927- 1935, 1937-1946"} />
        <Chess name="Макс Эйве" year ={"1935-1937"} />
        <Chess name="Михаил Ботвинник" year ={"1948—1957,1958—1960,1961—1963"} />
        <Chess name="Василий Смыслов" year ={"1957-1958"} />
        <Chess name ="Михаил Таль" year ={"1960-1961"} />
        <Chess name="Тигран Петросян" year ={"1964 - 1969"} />
        <Chess name="Борис Спасский" year ={"1969-1972"} />
        <Chess name="Роберт Фишер" year ={"1972- 1975"} />
        <Chess name="Анатолий Карпов" year ={"1975- 1985"} />
        <Chess name="Гарри Каспаров" year ={"1985-1993, 1993—2000"} />
        <Chess name="Владимир Крамник" year ={"2000-2007"} />
        <Chess name="Вишванатан Ананд" year ={"2007-2013"} />
        <Chess name="Магнус Карлсен" year ={"2013-2023"} />
        <Chess name="Дин Лижэнь" year ={"2023"} />
        
    </>
);