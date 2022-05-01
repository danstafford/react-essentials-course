import './App.css';
import React from 'react';
import restaurant from "./images/restaurant.jpeg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const anotherElement = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, another world!'
);

function Main(props) {
  return (
    <section>
      <p>We {props.adjective} serve food</p>
      <img 
        src={restaurant} 
        alt={'restaurant'} 
        height={300}
      /> 
      <img src="https://www.github.com/danstafford.png" alt={'mario'} height={300}/> 
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => 
        <li key={dish.id}>
            {dish.title}
        </li>
        )}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>it's true</p>
      <div>Copyright {props.year}</div>
    </footer>
  )
}

const dishes = [
  "mac and cheese",
  "slamon",
  "pizza",
  "pie",
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))


function SecretComponent() {
  return <h1>Super secret info for authorized users</h1>
}

function RegularComponent() {
  return <h1>Everyone can see this</h1>
}

// Array destructuring

// Standard array
// const checklist = ['boots', 'tent', 'headlamp'];

const [shoetype,, light] = ['boots', 'tent', 'headlamp'];
// console.log(light); // returns headlamp

// Object destructuring - remove "props", just use "authorized"
// function App(props) {
function App({authorized}) {

  // Long way
  if (authorized) {
    return <SecretComponent />
  }
  else {
    return <RegularComponent />
  }

  // Medium Way
  return (
    <>
    {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )

  // Short way
  return (authorized) ? <SecretComponent /> : <RegularComponent />

  return (
    <div className="App">
      {element}
      {anotherElement}
      <Header name="Dan" />
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );


}

export default App;
