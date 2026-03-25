import React from 'react';
import LogoImage from '../../assets/logo.png';
import Currency from '../../assets/Currency.png'
const Nav_bar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className=" text-xl"><img src={LogoImage} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center px-3 py-2 border-2 border-[#ffffff] rounded-xl'>
                        <span className='mr-1'>60000000</span>
                        <span className='mr-1'>Coin</span>
                        <img src={Currency} alt="" className='' />
                    </div>
                </div>
            </div >
        </>
    );
};

export default Nav_bar;