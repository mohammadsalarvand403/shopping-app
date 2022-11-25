
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './pages/CartPage/CartPage';
import HomePage from './pages/HomePage/HomePage';
import CartProvider from './Providers/CartProvider';


const App = () => {
  return ( 
    <div className='App'>
      <CartProvider>
  <Routes>  
    <Route path='/' element={<HomePage/>} />
    <Route path='/cart' element={<CartPage/>} />
  </Routes>
    </CartProvider>
    </div>
  );
}
 
export default App;
