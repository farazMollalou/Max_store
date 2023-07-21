import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function TrendSlide(props) {
    return (
        <>
            {(props.product_id > 0 && props.product_id < 13) &&<a href={props.ReF} className='slider-card'>
                <img src={`./images/products_img/trend_products/${props.product_id}.webp`} alt="slide" />
                <div className="row1">
                    <span className='current-price'> {props.current_price} تومان</span>
                    <span className='off-num'>{props.off_num}%</span>
                </div>
                <div className="row2"><del>{props.old_price}</del></div>
            </a>}
            {props.product_id === 0 &&
                <div className='first-card'>
                    <h4>پرفروش ترین محصولات</h4>
                    <img src="./images/products_img/trend_products/trend_icon.png" alt="trends" />
                    <a href="#">مشاهدۀ همه <ArrowBackIosIcon className='arrow'/></a>
                </div>
            }
            {props.product_id === 13 &&
                <a href='https://google.com' className='last-card'>
                    <ArrowBackIcon className='icon'/>
                    <h4>دیدن همه</h4>
                </a>
            }
        </>

    )
}

export default TrendSlide