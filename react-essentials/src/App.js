import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen </h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{textAlign: "left"}}>
        {
          props.dishes.map((dish) => <li>{dish}</li>)
        }
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  "Steak",
  "Fish",
  "Pizza"
]

/// - Printing out 
// dishes.map((dish) => console.log(dish));

function App() {
  return (
    <div className="App">
      <Header name="Mehmet"/>
      <Main adjective="AWESOME" dishes={dishes}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
