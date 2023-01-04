
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profail from './components/Profail/Profail';
import CartPage from './pages/CartPage/CartPage';
import Checkout from './pages/CheckoutPage/Checkout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import AuthProvider from './Providers/AuthProvider';
import CartProvider from './Providers/CartProvider';


const App = () => {
  return ( 
    <div className='App'>
      <AuthProvider>
  <CartProvider>
  <Routes>  
    <Route path='/' element={<HomePage/>} />
    <Route path='/cart' element={<CartPage/>} />
    <Route path='/checkout' element={<Checkout/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/signup' element={<SignUpPage/>} />
    <Route path='/profail' element={<Profail/>} />
  </Routes>
    </CartProvider>
    </AuthProvider>
    </div>
  );
}
 
export default App;
