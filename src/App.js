import './App.css';


// useState () ;
import ContadorState from './clases/clase01/useState/ContadorState';

// useContext () ;
import Office from './clases/clase01/useContext/Office';
import ContadorConReducer from './clases/clase01/useReducer/Contador';
import MeasureElement from './clases/clase01/useLayoutEffect/MeasureElement';

//useReducer () ;






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

      <hr />
      <hr />

       {/* useReducer () */}
       <ContadorConReducer />

       {/* useLayout () */}
       <MeasureElement />

      <hr />
      <hr />




  
    </div>
  );
}

export default App;
