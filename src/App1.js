// import styles from './App.module.css';
import "./App.css"

// const age = 15;
// if(age >=18){
//     console.log("IS OVER AGE");
// } else{
//     console.log("IS UNDER AGE");
// }
                                                                        // i jedno i drugo je isto, samo ovo dole mnogo manje linija zauzima!
function App1(){
    const age = 19;
    const isGreen = true;

    return(
        <div className="App1">
            {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
            <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS COLOR</h1>
            
            {isGreen && <button>THIS IS A BUTTON</button>}

        </div>
    );
    
}

export default App1;