import { Route , Switch, Redirect} from 'react-router-dom';
import './App.css';
// import About from './components/About';
import BeautyDetail from './components/BeutyProducts/BeautyDetail';
import BeautyProd from './components/BeutyProducts/BeautyProd';
// import Signup from './components/buttons/Signup';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
// import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Decor from './components/homeandDecor/Decor';
import DecorDetail from './components/homeandDecor/DecorDetail';
import KidsPage from './components/kids/KidsPage';
import KidsProducts from './components/kids/KidsProduct';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import SideBar from './components/SideBar';
import WishlistItems from './components/WishlistItems';
import Womens from './components/WomenProductPage/Womens';
import WomenProductDetail from './components/WomenProductPage/WomensProductDetail';

function App() {
  return (
   <div>
   <div className=''>
   <Header/>
   </div>
  
  <Switch>
  <Route exact path='/' component={Home}/>

  <Route exact path='/products' component={Product}/>
  <Route exact path='/products/:id' component={ProductDetail}/>

  <Route exact path='/cart' component={Cart}/>
  <Route exact path='/checkout' component={Checkout}/>
 
  
  <Route exact path='/women/:id' component={WomenProductDetail}/>
  <Route exact path='/women' component={Womens}/>

  <Route exact path='/kids' component={KidsPage}/>
  <Route exact path='/kids/:id' component={KidsProducts}/>

  <Route exact path='/decor' component={Decor}/>
  <Route exact path='/decor/:id' component={DecorDetail}/>

  <Route exact path='/beauty' component={BeautyProd}/>
  <Route exact path='/beauty/:id' component={BeautyDetail}/>

  <Route exact path='/wish' component={WishlistItems}/>
  </Switch>
   </div>
  );
}

export default App;
