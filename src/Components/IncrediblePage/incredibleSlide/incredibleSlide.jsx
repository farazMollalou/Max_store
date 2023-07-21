import React from 'react'
import { Link } from 'react-router-dom'


function IncredibleSlide(props) {

  let product_detail = props.product_details
  let currentPrice = (Number(product_detail.price) * (100 - product_detail.discount_percent)) / 100

  return (
    <>
      <Link to={`/products/${product_detail.product_id}`} className='slider-card'>
        <img src={product_detail.img_url} alt="slide" />
        <div className="row1">
          {product_detail.isExist && <span className='current-price'>
            {currentPrice < 1_000_000 ? <>{String(currentPrice).slice(0, -3)},{String(currentPrice).slice(-3)}</> : <>{String(currentPrice).slice(0, -6)},{String(currentPrice).slice(-6, -3)},{String(currentPrice).slice(-3)}</>} تومان
          </span>}
          <span className='off-num'>{product_detail.discount_percent}%</span>
        </div>
        <div className="row2">
          {product_detail.isExist && <del>
            {Number(product_detail.price) < 1_000_000 ? <>{String(product_detail.price).slice(0, -3)},{String(product_detail.price).slice(-3)}</> : <>{String(product_detail.price).slice(0, -6)},{String(product_detail.price).slice(-6, -3)},{String(product_detail.price).slice(-3)}</>}
          </del>}
        </div>
      </Link>
    </>
  )
}

export default IncredibleSlide