import React from 'react';
import '../../Navbar/NavBar.css'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (

        <div className='head-text w-full'>
            <div>
                <img src='image1.png' alt="" className='h-screen w-full'/>
            </div>
            <div className='center-text'>
                <h3 className='heading-text p-4'>Unlock your team's full potential with our cutting-edge skills matrix</h3>

                <Link to='/skill'><button className="btn btn-outline bg-white text-black my-2 button-left rounded-xl">Get started</button></Link>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;