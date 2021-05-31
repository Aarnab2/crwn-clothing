import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route } from 'react-router-dom' 
import ShopPage from './pages/shop/shop.component'

// const HatsPage = (props)=>{
//   console.log(props)
//   return <div>
//     <h1>HATS PAGE</h1>
//   </div>
// }

function App() {
  return (
    <div>
      
      <Route  exact path='/' component={HomePage}></Route>
      <Route exact path='/shop' component={ShopPage}></Route>
      
      
    </div>
  );
}

export default App;
