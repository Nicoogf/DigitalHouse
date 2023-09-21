import './App.css';
import ClaseUno from './clases/clase01/claseUno';
import ClaseUnouseEffect from './clases/clase01/claseUnouseEffect';
import Office from './clases/clase01/useContext/Office';
import InputWithFocus from './clases/clase01/useRef/InputWhitFocus';

function App() {

  console.log("Se renderizo el componente App")

  return (
    <div className="App">
      { /* <ClaseUno valorInicial={8} /> */ }
      { /* <ClaseUnouseEffect /> */ } 
      { /*<Office /> */ }
      <InputWithFocus />
    </div>
  );
}

export default App;
