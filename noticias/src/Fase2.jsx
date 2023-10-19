import './App copy.css'
import'animate.css/animate.min.css'
import  Title  from './components/Titulo/Title';
import  Cards  from "./components/Cartas/Cards.jsx";
function App() {


  return (
    <>

      
  <div className='tot'>
      <div className='App overflow'>
      <h1>
        <Title/>
      </h1>
        <Cards />
      </div>
      </div>
    </>
  )
}

export default App
