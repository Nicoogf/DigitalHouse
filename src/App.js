import './App.css';
import ClaseUno from './clases/clase01/claseUno';

function App() {

  console.log("Se renderizo el componente App")

  return (
    <div className="App">
      <ClaseUno valorInicial={8} />
    </div>
  );
}

export default App;
