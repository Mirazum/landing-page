import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import './NavBar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-200 ">

                <div className="flex-1 p-3">
                    <a className="btn btn-ghost normal-case text-xl">TALENT FINDER</a>
                </div>
                <div className='p-2'><Link to='/home'>Home</Link></div>
                <div className="flex-none">
                    <Link to='/login'><button className='p-2'>Login</button></Link>
                    <button className="btn btn-square btn-ghost">
                        <UserCircleIcon></UserCircleIcon>
                    </button>
                </div>
            </div>
          
        </div>
    
    );
};



export default NavBar;

