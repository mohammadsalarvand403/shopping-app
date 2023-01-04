import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import './navigagtion.css'
const Navigation = () => {
    const {cart}=useCart();
    const uesData=useAuth()
    return (
   <header className="navigation">
   <nav>
    <ul>
        <li>mohammd Shopping</li>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

    </ul>
        <ul>
            <li className="bage">
                <NavLink to="/cart">
                cart
                <span>{cart.length}</span>
                </NavLink>
            </li>
            <li className="login">
                <NavLink to={uesData?"/profail":"/login"}>
                   {uesData?"profail":" signup/login"}
                </NavLink>
            </li>
            
        </ul>
    </nav> 
   </header> 
    );
}
 
export default Navigation;