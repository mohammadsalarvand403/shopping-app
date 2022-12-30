import Layout from "../../Layout/Layout";
import { useFormik} from "formik";
import * as Yup from 'yup';
import Input from "../../common/input";
import './login.css'
import { Link } from "react-router-dom";
const onSubmit=(values)=>{
    console.log(values);
//    axios.post("http://localhost:3001/user",values).then((res)=>{
//     console.log(res.data);
//    }).catch((e)=>{
//     console.log(e);
//    })
}
const initialValues={
    name:"",
    email:"",
    password:"",
  
};
const validationSchema=Yup.object({
    name:Yup.string().required("Name is required").min(6,"Naem length is not valid"),
    email:Yup.string().email("Invalid email format").required("Email is required"),
    password:Yup.string()
    .required('Please Enter your password')
    
})
const Login = () => {

    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount:true,
        });
        
    return ( 
        <Layout>
            <div className="form">
            <form onSubmit={formik.handleSubmit}>
            <Input formik={formik} name="name" label="Name"  />
            <Input formik={formik} name="email" label="Email"  />
            <Input formik={formik} name="password" type='password' label="Password"  />
            <button style={{width:"100%"}} type="submit" disabled={!formik.isValid} className="btn primary">Login</button>
            <Link to="/signup">
                <p style={{marginTop:"18px"}}>Not signup yet ?</p>
            </Link>
            </form>
            </div>
        </Layout>
     );
}
 
export default Login;