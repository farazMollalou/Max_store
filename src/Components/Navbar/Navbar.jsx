import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PercentIcon from '@mui/icons-material/Percent';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import DiscountIcon from '@mui/icons-material/Discount';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CloseIcon from '@mui/icons-material/Close';
import DevicesIcon from '@mui/icons-material/Devices';
import HandymanIcon from '@mui/icons-material/Handyman';
import ChairIcon from '@mui/icons-material/Chair';
import ToysIcon from '@mui/icons-material/Toys';
import ModeIcon from '@mui/icons-material/Mode';
import BoyIcon from '@mui/icons-material/Boy';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import './Navbar.css';
import HelpIcon from '@mui/icons-material/Help';
import numberWithComma from '../CommaHandler';

function Navbar() {
    const [navbar_state, setNavbar_state] = useState('close')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    console.log(numberWithComma(1452143330))

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    })
    function navbar_handler(st) {
        setNavbar_state(st)
    }
    return (
        <>
            {windowWidth < 992 && <div className='TopNav-container'>
                <MenuIcon onClick={() => navbar_handler('open')}/>
                <img src="/images/MAX-Fashions.png" alt="logo" />
                <HelpIcon />
            </div>}

            <nav className={`nav ${navbar_state === 'open' ? 'responsive' : null}`}>
                <CloseIcon className='close-icon' onClick={() => navbar_handler('close')}/>
                <Link to="/"><img src="/images/MAX-Fashions.png" alt="logo" /></Link>
                <a href='#' className="mainItem">
                    <MenuIcon />
                    <span>دسته بندی کالاها</span>
                    <div className="drop_down_menu">
                        <Link to={'/category/mobile'} className='part'><DevicesIcon /><span> موبایل و لپ تاپ </span></Link>
                        <Link to={"/category/supermarket"} className='part'><FastfoodIcon /><span> سوپرمارکت و خوراکی </span></Link>
                        <Link to={'/category/apparel'} className='part drop'><BoyIcon /><span> مد و پوشاک <ArrowLeftIcon /></span>
                            <div className="drop_down_menu_2">
                                <Link to={'/category/apparel'} className='one'>کاپشن و هودی</Link>
                                <Link to={'/category/apparel'}>کفش اسپرت و مجلسی</Link>
                                <Link to={'/category/apparel'}>ساعت مچی</Link>
                                <Link to={'/category/apparel'}>تیشرت و بلوز</Link>
                            </div>
                        </Link>
                        <Link to={"/404"} className='part'><ChairIcon /><span> لوازم خانگی </span></Link>
                        <Link to={'/category/stationery'} className='part'><ModeIcon /><span> کتاب و لوازم التحریر </span></Link>
                        <Link to={"/404"} className='part'><HandymanIcon /><span> ابزارآلات صنعتی </span></Link>
                        <Link to={"/404"} className='part'><ToysIcon /><span> اسباب بازی </span></Link>
                    </div>
                </a>
                <span className='separator'></span>
                <Link to='/category/supermarket' onClick={() => navbar_handler('close')}>
                    <FiberNewIcon className='icon icon1' /><span>اجناس جدید</span>
                </Link>
                <Link to='/incredible-offers/11' onClick={() => navbar_handler('close')}>
                    <WhatshotIcon className='icon icon2' /><span>پرفروش ها</span>
                </Link>
                <Link to='/incredible-offers/11' onClick={() => navbar_handler('close')}>
                    <DiscountIcon className='icon icon3' /><span>حراج</span>
                </Link>
                <Link to="/incredible-offers/11" onClick={() => navbar_handler('close')}>
                    <PercentIcon className='icon icon4' /><span>شگفت انگیز</span>
                </Link>
                <span className='separator'></span>
                <Link to='/404' onClick={() => navbar_handler('close')}>
                    <ContactSupportIcon className='icon icon5' /><span>سوال دارید؟</span>
                </Link>
                <Link to='/404' onClick={() => navbar_handler('close')}>
                    <HandshakeIcon className='icon icon6' /><span>همکاری</span>
                </Link>
            </nav>
        </>
    )
}

export default Navbar 