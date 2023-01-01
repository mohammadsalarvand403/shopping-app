import Layout from "../../Layout/Layout";
import { useFormik} from "formik";
import * as Yup from 'yup';
import Input from "../../common/input";
import './signup.css'
import { Link } from "react-router-dom";
import {signupUser} from "../../Services/signupServices";
import { useState } from "react";

const initialValues={
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    passwordConfirm:""
};
const validationSchema=Yup.object({
    name:Yup.string()
    .required("Name is required")
    .min(6,"Naem length is not valid"),
    email:Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
    phoneNumber:Yup.string()
    .required("Phoen Number is required")
    .matches(/^[0-9]{11}$/,"Invalid Phoen Number ")
    .nullable(),
    password:Yup.string()
    .required('Please Enter your password')
    // .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    // ),
    ,
    passwordConfirm: Yup.string() 
    .required('Please Enter your password')
    .oneOf([Yup.ref("password"),null],'is not match password'),
})
const SinUpPage = () => {
    const [error , setError]=useState(null);
    const onSubmit= async (values) =>{
     const {name,email,phoneNumber,password}=values;
     const userData={
        name,
        email,
        phoneNumber,
        password
     };
     try {
       const {data}= await signupUser(userData);
       console.log(data);
     } catch (error) {
        console.log(error.response.data.message);
        if(error.response && error.response.data.message){
        setError(error.response.data.message)

        }

     };
    };
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
            <Input formik={formik} name="phoneNumber" label="phoneNumber" />
            <Input formik={formik} name="password" type='password' label="Password"  />
            <Input formik={formik} name="passwordConfirm" type='password' label="Password Confirmation"  />
            <button style={{width:"100%"}} type="submit" disabled={!formik.isValid} className="btn primary">signup</button>
            {error&&<p style={{color:"red"}}>error is :{error}</p>}           
            <Link to="/login">
                <p style={{marginTop:"18px"}}>Already Login ?</p>
            </Link>
            </form>
            </div>
        </Layout>
     );
}
 
export default SinUpPage;