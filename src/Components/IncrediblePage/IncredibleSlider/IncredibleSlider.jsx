import React, { useState } from 'react'
import './IncredibleSlider.scss';
import { Link } from 'react-router-dom'
import DevicesIcon from '@mui/icons-material/Devices';
import ChairIcon from '@mui/icons-material/Chair';
import ToysIcon from '@mui/icons-material/Toys';
import ModeIcon from '@mui/icons-material/Mode';
import ManIcon from '@mui/icons-material/Man';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import IncredibleSlide from '../incredibleSlide/incredibleSlide';

// import from database.js 
import { mobile_category, supermarket_category, stationery_category, apparel } from "../../../DataBase";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function IncredibleSlider(props) {

    let parameter = props.parameter

    const [windowSize, setWindowSize] = useState(window.innerWidth)
    let slide_number = (windowSize > 1400) ? 5 : (windowSize > 992) ? 4 :
        (windowSize > 768) ? 3 : (windowSize > 480) ? 2 : 1;

    window.addEventListener('resize', () => {
        setWindowSize(window.innerWidth)
    })

    let slider_products_list = []
    let products_categories = [mobile_category, apparel, apparel, apparel, supermarket_category, stationery_category]
    const color_list = ['#D61355', '#913175', '#F94A29', '#6C00FF', '#902424', '#379237']
    let slider_bg = color_list[(parameter % 10) - 1]

    slider_products_list = products_categories[(parameter % 10) - 1]
        .filter(product => product.discount_percent)
        .filter((pr, index) => {
            return (!(index % 3) && pr.isExist)
        }).reverse()

    return (
        <>
            <header className='slider-header' style={{ backgroundColor: `${slider_bg}` }}>
                <h2>پیشنهاد شگفت انگیز</h2>
                <div className="category-container">
                    <Link to='/incredible-offers/11' className='mobile-laptop-cat'>
                        <DevicesIcon className='icon' />
                        موبایل و لپتاپ
                    </Link>
                    <Link to='/incredible-offers/22' className='apparel-cat'>
                        <ManIcon className='icon' />
                        مد و پوشاک
                    </Link>
                    <Link to='/incredible-offers/33' className='home-appliances-cat'>
                        <ChairIcon className='icon' />
                        لوازم خانگی
                    </Link>
                    <Link to='/incredible-offers/44' className='toys-cat'>
                        <ToysIcon className='icon' />
                        اسباب بازی
                    </Link>
                    <Link to='/incredible-offers/55' className='supermarket-cat'>
                        <FastfoodIcon className='icon' />
                        خوراکی
                    </Link>
                    <Link to='/incredible-offers/66' className='stationery-cat'>
                        <ModeIcon className='icon' />
                        لوازم التحریر
                    </Link>
                </div>
            </header>
            <div className='incredible-slider-temp' style={{ backgroundColor: `${slider_bg}` }}>
                <Swiper
                    // install Swiper modules
                    className='products-slider'
                    modules={[Navigation, Pagination, A11y, Scrollbar]}
                    spaceBetween={0}
                    slidesPerView={slide_number}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className='first-card'>
                            <h4>پیشنهاد شگفت انگیز</h4>
                            <img src="/images/off2.png" alt="off" />
                        </div>
                    </SwiperSlide>

                    {slider_products_list.map((item) => (
                        <SwiperSlide key={item.product_id}>
                            <IncredibleSlide product_details={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default IncredibleSlider