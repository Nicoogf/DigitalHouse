import './App.css';


// useState () ;
import ContadorState from './clases/clase01/useState/ContadorState';

// useContext () ;
import Office from './clases/clase01/useContext/Office';
import ContadorConReducer from './clases/clase01/useReducer/Contador';
import MeasureElement from './clases/clase01/useLayoutEffect/MeasureElement';
import UseMemoComponent from './clases/clase01/useMemo/useMemoComponent';
import UseCallbackComponent from './clases/clase01/useCallback/useCallbackComponent';
import PropsTypesComponent from './clases/clase01/PropsTypes/PropsTypes';
import MainComponent from './clases/clase01/clase04/main';

//useReducer () ;






function App() {

  console.log("Se renderizo el componente App")

  return (
    <div className="App">
    {/* 
       UseState () 
      <ContadorState />

      <hr />
      <hr />

      UseContext 
      <Office />

      <hr />
      <hr />

       {useReducer () 
       <ContadorConReducer />

      <hr />
      <hr />

       useLayout () 
       <MeasureElement />

      <hr />
      <hr />

        useLayout ()
       <UseMemoComponent />

      <hr />
      <hr />

        useLayout 
       <UseCallbackComponent />

      <hr />
      <hr />

        PropsTypes 

       <PropsTypesComponent texto="Hola Mundo" />
     
      */}

     <MainComponent children={}> </MainComponent>



  
    </div>
  );
}

export default App;
