import React from 'react'
import './rhf.css'
import { useForm } from 'react-hook-form';
import { data } from 'react-router-dom';

const BasicHookForm = () => {

    //initialize the useform hook

    const {
        register,                  // used register input feilds
        handleSubmit,             // function to handle form submition
        formState: {errors},     //object containing validation error
        reset                   // function to reset the form to initial value
    } = useForm();


    // function to handle form submition 
    const onSabmit = (data) => {
        console.log(data);
        reset();              // reset the form after submittion 
        
    }

  return (
    <form onSubmit={handleSubmit(onSabmit)}>
        {/* name */}
        <label>Name:</label>
        <input
        {...register("name", {required: "name is required"})}
        />
        {errors.name && <p style={{color:'red'}}> {errors.name.message}  </p>}

        
        {/* email */}
        <label>Email:</label>
        <input
        {...register("email", {required: "email is required",
            pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"invalid email"
            }
        })}
        />
        {errors.email && <p style={{color:'red'}}>{errors.email.message} </p>}



        {/* submission button  */}
        <button type='submit'>Submit</button>



        {/* reset button  */}
        <button type='reset' onClick={() => reset()}>Reset</button>

    </form>
  )
}


export default BasicHookForm