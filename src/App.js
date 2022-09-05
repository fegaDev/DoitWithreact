import './App.css';
import Props from './PropsTopic/Props.jsx'


function App() {
  return (
    <div className="ContenedorCurso">
      
      <div className="propsTopic">
        <Props 
        string="Topic: Props" 
        number={30} 
        booleano={false}
        arreglo={[1,2,3]}
        objecto={{id:1,nombre:"myName",apellido:"myLastName"}} 
        funcion={(num) => num*2}
        />
      </div> 















    </div>
  );
}

export default App;
