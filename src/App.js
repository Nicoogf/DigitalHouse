import './App.css';
import ClaseUno from './clases/clase01/claseUno';
import ClaseUnouseEffect from './clases/clase01/claseUnouseEffect';

function App() {

  console.log("Se renderizo el componente App")

  return (
    <div className="App">
      { /* <ClaseUno valorInicial={8} /> */ }
      <ClaseUnouseEffect />
    </div>
  );
}

export default App;
