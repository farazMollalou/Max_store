import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import Slide from './slide/Slide'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {

    const [windowSize, setWindowSize] = useState(window.innerWidth)
    let slide_number = (windowSize > 1400) ? 5 : (windowSize > 992) ? 4 :
        (windowSize > 768) ? 3 : (windowSize > 480) ? 2 : 1;

    window.addEventListener('resize', () => {
        setWindowSize(window.innerWidth)
    })


    return (
        <div className='slider-temp'>
            <Swiper
                // install Swiper modules
                className='products-slider'
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={slide_number}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Slide product_id={0} off_num={25} current_price={"75,000"} old_price={100000} ReF='https://google.com'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={1} off_num={33} current_price={"134,000"} old_price={200000} ReF='https://google.com' rest={39}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={2} off_num={20} current_price={"128,000"} old_price={160000} ReF='https://google.com' rest={54}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={3} off_num={40} current_price={"60,000"} old_price={100000} ReF='https://google.com' rest={40}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={4} off_num={50} current_price={"85,000"} old_price={170000} ReF='https://google.com' rest={27}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={5} off_num={18} current_price={"123,000"} old_price={150000} ReF='https://google.com' rest={80}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={6} off_num={33} current_price={"66,000"} old_price={100000} ReF='https://google.com' rest={54}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={7} off_num={28} current_price={"108,000"} old_price={150000} ReF='https://google.com' rest={42}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={8} off_num={20} current_price={"96,000"} old_price={120000} ReF='https://google.com' rest={33}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={9} off_num={15} current_price={"90,000"} old_price={106000} ReF='https://google.com' rest={18}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={10} off_num={24} current_price={"144,000"} old_price={180000} ReF='https://google.com' rest={35}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={11} off_num={20} current_price={"106,000"} old_price={120000} ReF='https://google.com' rest={44}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={12} off_num={10} current_price={"504,000"} old_price={560000} ReF='https://google.com' rest={12}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide product_id={13} off_num={10} current_price={"504,000"} old_price={560000} ReF='https://google.com'></Slide>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider


