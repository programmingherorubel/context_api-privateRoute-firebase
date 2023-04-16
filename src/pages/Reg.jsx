import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/provider/AuthProvider';

const Reg = () => {
    const {createUser} = useContext(AuthContext)
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
            return
        }
      
        createUser(update.email,update.password)
        .then(result =>{
            const user = result.user
            toast.success('user created successfully')
            
        })
        .catch(err =>{
            const errorMessage = err.message
            toast.error(errorMessage)
            console.log(errorMessage)
        })
        e.target.reset()
    }
    return (
        <div className='conatiner mx-auto text-center'>
            <h2 className='mt-10 text-4xl'>Registration</h2>

            <form onSubmit={handelForm}>
                <input onChange={onchangeHendeler} name='name' type="text" placeholder="Name" className="mt-5 input w-full max-w-xs border-inherit"  /> <br />

                <input onChange={onchangeHendeler} name='email' type="email" placeholder="Email" className="mt-5 input w-full max-w-xs border-inherit"  /> <br />

                <input onChange={onchangeHendeler} name='password' type="password" placeholder="Password" className="mt-5 input w-full max-w-xs border-inherit"  /> <br />

                <input onChange={onchangeHendeler} name='password1' type="password" placeholder="Confirm-Password" className="mt-5 input w-full max-w-xs border-inherit"  /> <br />
                
                <Link className='text-black' to='/forget'><p className='text-xs mt-2'>Forget Password</p></Link>
                <button type='submit' className="mt-5 mx-4 btn btn-outline btn-success">Registration</button>
            </form>
        </div>
    );
};

export default Reg;