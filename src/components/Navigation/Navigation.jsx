import { NavLink } from "react-router-dom";
import './navigagtion.css'
const Navigation = () => {
    return (
   <header className="navigation">
   <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/cart">
                   
                cart</NavLink>
            </li>
            
        </ul>
    </nav> 
   </header> 
    );
}
 
export default Navigation;