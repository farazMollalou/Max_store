import React from 'react'
import './SpecialAd.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

function SpecialAds() {
    return (
        <>
            <div className='special-ads-container'>
                <Link to={'/404'}><img src="./images/products_img/bedroom.jpg" alt="bedroom" /></Link>
                <Link to={'/404'}><img src="./images/products_img/tea.jpg" alt="tea" /></Link>
            </div>
            <div className="flagship_products_container">
                <div className="headphone-unit unit">
                    <h4 className='title'>هدفون، هندزفری و هدست</h4>
                    <div className="products-container">
                        <a href="#"><img src="./images/products_img/flagship-products/h1.jpg" alt="headphone" /></a>
                        <a href="#"><img src="./images/products_img/flagship-products/h2.jpg" alt="headphone" /></a>
                        <a href="#"><img src="./images/products_img/flagship-products/h3.jpg" alt="headphone" /></a>
                        <a href="#"><img src="./images/products_img/flagship-products/h4.jpg" alt="headphone" /></a>
                    </div>
                    <Link to={'/category/mobile'}><ArrowBackIosIcon className='arrow-icon'/> دیدن همه </Link>
                </div>
                <div className="mobile-cover-unit unit">
                    <h4 className='title'>کیف و کاور گوشی </h4>
                    <div className="products-container">
                        <a href="#"><img src="./images/products_img/flagship-products/m1.jpg" alt="mobile-cover" /></a>
                        <a href="#"><img src="./images/products_img/flagship-products/m2.jpg" alt="mobile-cover" /></a>
                        <a href="#"><img src="./images/products_img/flagship-products/m3.jpg" alt="mobile-cover" /></a>
                        <a href="#"><img src="./images/products_img/flagship-products/m4.jpg" alt="mobile-cover" /></a>
                    </div>
                    <Link to={'/category/mobile'}><ArrowBackIosIcon className='arrow-icon'/> دیدن همه </Link>
                </div>
                <div className="smart-watch-unit unit">
                    <h4 className='title'>ساعت هوشمند</h4>
                    <div className="products-container">
                        <a href="#"><img src="./images/products_img/flagship-products/w1.jpg" alt="smart-watch" /></a>
                        <a href="#"><img src="./images/products_img/flagship-products/w2.jpg" alt="smart-watch" /></a>
                        <a href="#"><img src="./images/products_img/flagship-products/w3.jpg" alt="smart-watch" /></a>
                        <a href="#"><img src="./images/products_img/flagship-products/w4.jpg" alt="smart-watch" /></a>
                    </div>
                    <Link to={'/category/mobile'}><ArrowBackIosIcon className='arrow-icon'/> دیدن همه </Link>
                </div>
                <div className="laptop-unit unit">
                    <h4 className='title'>لپ تاپ و موبایل</h4>
                    <div className="products-container">
                        <Link to={'/products/11425'}><img src="/images/products_img/gallery/laptop/lap3.webp" alt="laptop" /></Link>
                        <Link to={'/products/11426'}><img src="/images/products_img/gallery/laptop/lap4.webp" alt="laptop" /></Link>
                        <Link to={'/products/11424'}><img src="/images/products_img/gallery/laptop/lap2.webp" alt="laptop" /></Link>
                        <Link to={`/products/11423`}><img src="/images/products_img/gallery/laptop/lap1.webp" alt="laptop" /></Link>
                    </div>
                    <Link to={'/category/mobile'}><ArrowBackIosIcon className='arrow-icon'/> دیدن همه </Link>
                </div>
            </div>
        </>
    )
}

export default SpecialAds