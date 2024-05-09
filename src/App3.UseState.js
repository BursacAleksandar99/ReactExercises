import "./App.css";
import { useState } from 'react';

function App3(){
    // let age = 0;
    const [age, setAge] = useState(0);

    const increaseAge = () => {
        setAge(age + 1);
    };

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const [showText, setShowText] = useState(true);

    const [textColor, setTextColor] = useState("black");

    return <div className="App">
        {age}
            <button onClick={increaseAge}>Increase Age</button>

            <hr></hr>
            <input type="text" onChange={handleInputChange}/>
                {inputValue}

            <hr></hr>
            <button onClick={() => {
                setShowText(!showText);
            }}>Show/Hide</button>
            { showText === true && <h1>HI MY NAME IS ALEKSANDAR</h1>}

            <hr></hr>
            <button onClick={() => {
                setTextColor(textColor === "black" ? "red" : "black");
            }}>Dye</button>
            <h1 style={{color: textColor}}>HI MY NAME IS ALEKSANDAR</h1>
            <hr></hr>
            
        </div>
}
// react nece ispisati age + 1, tj. 1,2,3,4... jer funkcija App3 se renderuje samo jednom! U konzoli se vrednost promenljive age menja ali na stranici ipak ne!
// Zato koristimo STATE!

export default App3;