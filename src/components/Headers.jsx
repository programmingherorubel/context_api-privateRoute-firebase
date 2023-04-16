import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';
import { toast } from 'react-hot-toast';

const Headers = () => {
    const {user,logout}= useContext(AuthContext)

    const singout = ()=>{
        logout()
        .then(result =>{
            toast.success('successfully logged out')
        })
        .catch(err =>{

        })
    }
    return (
        <div className='container'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to=''>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/reg'>Registration</Link></li>
                        <li><Link to='/banner'>Banner</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">Extrem Hoop</a>
                </div>
                <div className="navbar-end">
                    {
                        user?.email && <h6 onClick={singout} className='text-sm text-red-700 font-bold'>Logout</h6>
                        
                    }
                    {
                        user?.email && <h6 className='text-sm text-white-700 font-bold'>{user?.displayName}</h6>
                    }
                </div>
                </div>
        </div>
    );
};

export default Headers;