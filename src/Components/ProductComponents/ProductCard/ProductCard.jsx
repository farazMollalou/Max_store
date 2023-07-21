import './ProductCard.scss'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import RocketIcon from '@mui/icons-material/Rocket';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImgLoader from "../../Loader/ImageLoader/ImgLoader"
import numberWithComma from '../../CommaHandler';

function ProductCard(props) {

    const [imgLoaded, setImgLoaded] = useState(false)

    let price = String(Number(props.product.price) * (100 - props.product.discount_percent) / 100)

    const loadHandler = () => {
        setTimeout(() => {
            setImgLoaded(true)
        }, 1000)
    }

    return (
        <Link to={`/products/${props.product.product_id}`} className='product_card'>
            <img
                src={props.product.img_url}
                alt={props.product.title}
                onLoad={loadHandler}
                className={`${!imgLoaded && 'hide-img'}`}
            />
            {
                !imgLoaded && <ImgLoader />
            }
            {(props.product.discount_percent && props.product.isExist) ? <span className='discount_percent'>{props.product.discount_percent}%</span> : null}
            <div className="product-detail">
                <h3 className='card_title'>{props.product.title}</h3>
                <div className="row1">
                    <span className='score'><StarIcon className='star-icon' /> {props.product.score}</span>
                    {props.product.option === 'delivery' ? <span className='option'>ارسال ویژه امروز <RocketIcon className='rocket-icon' /></span> :
                        (!props.product.option) ? <span className='option'> همراه با هدیه خرید <CardGiftcardIcon className='gift-icon' /></span> : null}
                </div>
                <div className="price-box">
                    {!props.product.isExist && <span className='text'>درحال تأمین</span>}
                    {props.product.isExist ? <span>
                        {numberWithComma(price)}
                        <em>تومان</em>
                    </span> : null}
                    {(props.product.discount_percent && props.product.isExist) ? <del>
                            {numberWithComma(props.product.price)}
                    </del> : null}
                </div>
            </div>
        </Link>
    )
}

export default ProductCard