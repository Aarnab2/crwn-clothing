import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route } from 'react-router-dom' 

const HatsPage = (props)=>{
  console.log(props)
  return <div>
    <h1>HATS PAGE</h1>
  </div>
}

function App() {
  return (
    <div>
      
      <Route  exact path='/' component={HomePage}></Route>
      <Route exact path='/shop/hats' component={HatsPage}></Route>
      
      
    </div>
  );
}

export default App;
