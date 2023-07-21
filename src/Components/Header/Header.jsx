import React, { useState } from 'react'
import Banner from '../Ad_banner/Banner'
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {

    const [focusState, setFocusState] = useState("out")

    let focus = () => {
        setFocusState('in')
    }
    let blur = () => {
        setFocusState('out')
    }

    return (
        <>
            <header className='header'>
                <Banner />
                <div className="header-top">
                    <Link to="/"><img src="/images/MAX-Fashions.png" alt="MAX-Fashions" /></Link>
                    <div className="search-box">
                        <div className={`search-icon-box ${focusState}`}>
                            <SearchIcon />
                        </div>
                        <input type="search" placeholder='جستجو' className="search-field" onFocus={() => focus()} onBlur={() => blur()} />
                    </div>
                    <div className="login-box">
                        <LoginIcon />
                        <span>ورود</span>
                        <span className='line'>|</span>
                        <span>ثبت نام</span>
                    </div>
                    <div className="login-box-sm">
                        <LoginIcon />
                        <span>ورود</span>
                    </div>
                    <a href="https://www.digikala.com/" className='cart-box'>
                        <ShoppingCartIcon className='cart'/>
                    </a>
                </div>
                <Navbar />
            </header>
        </>
    )
}

export default Header