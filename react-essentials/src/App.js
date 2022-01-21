import './App.css';

function SecretComponent() {
  return (
    <h1>Super secret information for authorized users only</h1>
  )
}

function RegularComponent() {
  return (
    <h1>Just some public information</h1>
  )
}

function App(props) {
  return (
    <>
      {props.authorized ? <SecretComponent/> : <RegularComponent/>}
    </>
  )
}

export default App;
