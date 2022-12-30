
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './pages/CartPage/CartPage';
import Checkout from './pages/CheckoutPage/Checkout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import CartProvider from './Providers/CartProvider';


const App = () => {
  return ( 
    <div className='App'>
  <CartProvider>
  <Routes>  
    <Route path='/' element={<HomePage/>} />
    <Route path='/cart' element={<CartPage/>} />
    <Route path='/checkout' element={<Checkout/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/signup' element={<SignUpPage/>} />
  </Routes>
    </CartProvider>
    </div>
  );
}
 
export default App;
