import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import './navigagtion.css'
const Navigation = () => {
    const {cart}=useCart();
    return (
   <header className="navigation">
   <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="bage">
                <NavLink to="/cart">
                cart
                <span>{cart.length}</span>
                </NavLink>
            </li>
            
        </ul>
    </nav> 
   </header> 
    );
}
 
export default Navigation;