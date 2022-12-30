import './input.css'
const Input = ({name,label,formik,type="text"}) => {
    return ( 
        <div className="formcontorol">
        <label htmlFor={name}>{label}</label>
        <input 
        type={type} 
        id={name}
         name="name"
         {...formik.getFieldProps(name)}
          />
        {formik.errors[name] 
        &&formik.touched[name] 
        && (<div className='errors'>
        {formik.errors[name]
        }</div>)}
    </div>
     );
}
 
export default Input;