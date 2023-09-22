import './App.css';


// useState () ;
import ContadorState from './clases/clase01/useState/ContadorState';

// useContext () ;
import Office from './clases/clase01/useContext/Office';





function App() {

  console.log("Se renderizo el componente App")

  return (
    <div className="App">

      {/* UseState () */}
      <ContadorState />

      <hr />
      <hr />

      {/* UseContext () */}
      <Office />
  
    </div>
  );
}

export default App;
