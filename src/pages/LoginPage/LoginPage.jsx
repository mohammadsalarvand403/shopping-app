import Layout from "../../Layout/Layout";
import { useFormik} from "formik";
import * as Yup from 'yup';
import Input from "../../common/input";
import './login.css'
import {  Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../Services/LoginServices";

const initialValues={
    email:"",
    password:""
  
};
const validationSchema=Yup.object({
    email:Yup.string().email("Invalid email format").required("Email is required"),
    password:Yup.string()
    .required('Please Enter your password')
    
})
const Login = () => {
    const Navigate =useNavigate()
    const [error,setError]=useState(null)
    const onSubmit=async (values)=>{
        try {
           const {data}=await loginUser(values) ;
           Navigate("/")
           setError(null)
        }catch (error) {
            if(error.response && error.response.data.message){
            setError(error.response.data.message)
    
            }
    
         };

    }
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
            <Input formik={formik} name="email" label="Email"  />
            <Input formik={formik} name="password" type='password' label="Password"  />
            <button style={{width:"100%"}} type="submit" disabled={!formik.isValid} className="btn primary">Login</button>
            {error&&<p style={{color:"red"}}>{error}</p>}               
            <Link to="/signup">
                <p style={{marginTop:"18px"}}>Not signup yet ?</p>
            </Link>
            </form>
            </div>
        </Layout>
     );
}
 
export default Login;