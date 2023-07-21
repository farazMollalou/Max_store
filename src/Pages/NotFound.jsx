import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import '../Components/NotFoundStyle/NotFound.css';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <Header />
            <section className="main_section">
                <img src="./images/404_prev_ui.png" alt="404" />
                <div className="text">
                    <h4>صفحۀ مورد نظر پیدا نشد!</h4>
                    <Link to="/" className='home-btn'><HomeIcon /> بازگشت به صفحۀ اصلی</Link>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default NotFound