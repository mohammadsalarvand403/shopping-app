import { useAuth } from "../../Providers/AuthProvider";
import './profail.css'
const Profail = () => {
    const dataProfail=useAuth()
    return ( 
        <div className="profail">
            <p>name:{dataProfail.name}</p>
            <p>email:{dataProfail.email}</p>
            <p>phonenumber:{dataProfail.phoneNumber}</p>
        </div>
     );
}
 
export default Profail;