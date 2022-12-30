import Layout from "../../Layout/Layout";
import { useFormik} from "formik";
import * as Yup from 'yup';
import Input from "../../common/input";
import './signup.css'
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
    phoenNumber:"",
    password:"",
    passwordConfirm:""
};
const validationSchema=Yup.object({
    name:Yup.string().required("Name is required").min(6,"Naem length is not valid"),
    email:Yup.string().email("Invalid email format").required("Email is required"),
    phoenNumber:Yup.string().required("Phoen Number is required").matches(/^[0-9]{11}$/,"Invalid Phoen Number format").nullable(),
    password:Yup.string()
    .required('Please Enter your password')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password"),null],'is not match password'),
})
const SinUpPage = () => {

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
            <Input formik={formik} name="phoenNumber" label="PhoenNumber" />
            <Input formik={formik} name="password" type='password' label="Password"  />
            <Input formik={formik} name="passwordConfirm" type='password' label="Password Confirmation"  />
            <button style={{width:"100%"}} type="submit" disabled={!formik.isValid} className="btn primary">signup</button>
            <Link to="/login">
                <p style={{marginTop:"18px"}}>Already Login ?</p>
            </Link>
            </form>
            </div>
        </Layout>
     );
}
 
export default SinUpPage;