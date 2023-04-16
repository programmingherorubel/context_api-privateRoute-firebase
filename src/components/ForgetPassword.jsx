import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const [update,setUpdate] = useState({})
    const onchangeHendeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value
        setUpdate(newValue)
    }
    const handelForm = e =>{
        e.preventDefault()
        if(update.password !== update.password1){
            toast.error('password did not matched')
        }
    }
    return (
        <div className='conatiner mx-auto text-center'>
            <h2 className='mt-10 text-2xl'>Reset Password</h2>

            <form onSubmit={handelForm}>
               
                <input onChange={onchangeHendeler} name='email' type="email" placeholder="Email" className="mt-5 input w-full max-w-xs border-inherit"  /> <br />

                <Link className='text-black' to='/reg'><p className='text-xs mt-2'>Registration</p></Link>
                <button className="mt-5 mx-4 btn btn-outline btn-success">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgetPassword;