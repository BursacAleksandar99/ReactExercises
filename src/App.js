
// import styles from './App.module.css';
import "./App.css"

function App() {
  // const name = "Aleksandar";
  // const surname = <h1>Bursac</h1>;
  // const age = <h2>24</h2>;
  // const email = <h2>aleksandar@aleksandar.com</h2>;
  // const user = (
  //   <div>
  //     {name} 
  //     {surname}
  //     {age}
  //     {email}
  //   </div>);
  return (
    <div className='App'>
      {/* <h1>{name}</h1>
      <h1>{name}</h1>
      <h1>{name}</h1>
      {surname}
      {surname}
      {surname} */}
      {/* {user}
      {user}
      {user} */}
      <User/>
      <User name="Aleksandar" age={24} email= "aleksandar@aleksandar.com" />
      <User name="Jelena" age={24} email="jelenarakic99@gmail.com" />
      <Job plata={1000} pozicija="Junior" kompanija="Librafire" />
      <h1>{props.name} {props.age} {props.email}</h1>
      <hr></hr>
    </div>
    
  );
}

const props = {
  name: "Nikola Popovic", 
  age: 23,
  email: "ziko@popovic.com"
}

const Job = (podatak) => {
  return <div>
    <h1>{podatak.plata}</h1>
    <h1>{podatak.pozicija}</h1>
    <h1>{podatak.kompanija}</h1>
  </div>
}



const User = (props) => {
  return <div>
  <h1 className='name'>{props.name}</h1>
  <h1>{props.age}</h1>
  <h1>{props.email}</h1>
  
  
</div>;
};

export default App;
