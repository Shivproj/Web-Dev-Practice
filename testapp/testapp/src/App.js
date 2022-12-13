import Login from './Components/login'
import{useSelector} from 'react-redux';
function App() {
  const get = useSelector((store)=>store.details.value);
  return (
    <div className="App">
      {get}


      <>Hi</>
      <Login/>
     
    </div>
  );
}

export default App;
