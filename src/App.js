
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './pages/CartPage/CartPage';
import HomePage from './pages/HomePage/HomePage';


const App = () => {
  return ( 
    <div className='App'>
  <Routes>  
    <Route path='/' element={<HomePage/>} />
    <Route path='/cart' element={<CartPage/>} />
  </Routes>
    </div>
  );
}
 
export default App;
