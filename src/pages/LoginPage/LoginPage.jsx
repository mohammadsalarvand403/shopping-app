import Layout from "../../Layout/Layout";
import { useFormik} from "formik";
import * as Yup from 'yup';
import Input from "../../common/input";
import './login.css'
import {  Link,useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUser } from "../../Services/LoginServices";
import { useAuth } from "../../Providers/AuthProvider";

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
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('redirect')||"/")
    const redirect=searchParams.get('redirect')
    const Navigate =useNavigate()
    const Auth=useAuth()
    const [error,setError]=useState(null)
    useEffect(()=>{
        if (Auth) {
            Navigate(redirect)
            
        }
    },[redirect,Auth])
    const onSubmit=async (values)=>{
        try {
           const {data}=await loginUser(values) ;
           Navigate(redirect)
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
            <Link to={`/signup?redirect=${redirect}`}>
                <p style={{marginTop:"18px"}}>Not signup yet ?</p>
            </Link>
            </form>
            </div>
        </Layout>
     );
}
 
export default Login;