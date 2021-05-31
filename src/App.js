import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route } from 'react-router-dom' 
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

// const HatsPage = (props)=>{
//   console.log(props)
//   return <div>
//     <h1>HATS PAGE</h1>
//   </div>
// }

function App() {
  return (
    <div>
      <Header></Header>
      <switch><Route  exact path='/' component={HomePage}></Route>
      <Route  path='/shop' component={ShopPage}></Route>
      </switch>

    </div>
  );
}

export default App;
