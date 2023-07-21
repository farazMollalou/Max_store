import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Slide(props) {
    return (
        <>
            {(props.product_id > 0 && props.product_id < 13) && <a href={props.ReF} className='slider-card'>
                <img src={`./images/products_img/amazing_slider/${props.product_id}.${props.product_id < 9 ? 'jpg' : 'png'}`} alt="slide" />
                <div className="row1">
                    <span className='current-price'> {props.current_price} تومان</span>
                    <span className='off-num'>{props.off_num}%</span>
                </div>
                <div className="row2"><del>{props.old_price}</del></div>
                <div className="row3">
                    <div className="progress">
                        <div className="p-bar" style={{width: `${props.rest}%`}}></div>
                    </div>
                    <span> <span className='percent'>{(props.rest)}%</span> از محصول باقیمانده است! </span>
                </div>
            </a>}
            {props.product_id === 0 &&
                <div className='first-card'>
                    <h4>پیشنهاد شگفت انگیز</h4>
                    <img src="./images/off2.png" alt="off" />
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

export default Slide