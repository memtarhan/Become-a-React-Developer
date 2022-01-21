import './App.css';
import restaurant from "./restaurant.jpg"

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
      <img 
        src={restaurant} 
        alt="restaurant" 
        height={200}
      />
      {/* <img src="https://github.com/memtarhan.png" alt="restaurant" height={120} /> */}
      <ul style={{textAlign: "left"}}>
        {
          props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>))
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

const dishTitles = [
  "Steak",
  "Fish",
  "Pizza"
]

const dishes = dishTitles.map((dish, index) => (
  { 
    id: index, 
    title: dish 
  }
))
console.log(dishes)

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
