import "./App.css"
import { User } from "./User.Component";
import { planets } from "./planets";

function App2Lists(){
    const names = ["Aleksandar", "Jelena", "Nikola", "Ilija", "ZikoSMRAD"];
    const users = [
        { name: "Aleksandar", age: 24},
        { name: "Ilija", age: 26},
        { name: "ZikoSMRAD", age: 23},
    ]
    
    return (<div className="App">
        {names.map((name, key) =>{
            return <h1 key={key}>{name}</h1> // string 
        })}
        {users.map((user, key) => {
            return <User key={key} name={user.name} age={user.age}/> // objekat
        })}
        {planets.map((planet, key) => planet.isGasPlanet ? <h1>{planet.name}</h1> : null )};

        {planets.map((planet, key) => {
            if(planet.isGasPlanet)
            return <h1>{planet.name}</h1>
        })}

        {planets.map((planet, key) => planet.isGasPlanet && <h1>{planet.name}</h1>)} 
    </div>
    )
    

}
// tri nacina pisanja if-else strukture



export default App2Lists;