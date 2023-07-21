import React from 'react'
import './Services.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Services() {
  return (
    <div className='services-container'>
        <a href="https://www.digikala.com/landing/gift-card-landing/?promo_name=gift_landing&promo_position=circle_badge">
            <img src="./images/services/gift-card_prev_ui.png" alt="gift-card" />
            <span>کارت هدیه</span>
        </a>
        <a href="https://digikalabusiness.com/?utm_source=digikala&utm_medium=circle_badge&utm_campaign=business&promo_name=business&promo_position=circle_badge">
            <img src="./images/services/organization_shopping.png" alt="shopping" />
            <span>خرید عمده</span>
        </a>
        <a href="https://www.pindo.ir/?utm_source=digikala&utm_medium=circle_badge&utm_campaign=pindo&promo_name=pindo&promo_position=circle_badge">
            <img src="./images/services/pindo.png" alt="pindo" />
            <span>ثبت آگهی</span>
        </a>
        {/* <a href="https://digikalabusiness.com/?utm_source=digikala&utm_medium=circle_badge&utm_campaign=business&promo_name=business&promo_position=circle_badge">
            <img src="./images/services/transaction.png" alt="transaction" />
            <span>تراکنش بانکی</span>
        </a> */}
        <a href="https://www.digikalajet.com/?utm_source=digikala&utm_medium=circle_badge&utm_campaign=jet&promo_name=jet&promo_position=circle_badge">
            <img src="./images/services/jet.png" alt="jet" />
            <span>خرید فوری</span>
        </a>
        <a href="https://www.digikala.com/digiclub/authorize/?game=wheel_spinner&redirect_url=http://games.digikala.com/wheel-spinner">
            <img src="./images/services/chance.png" alt="chance" />
            <span>قرعه کشی</span>
        </a>
        <a href="#">
            <MoreHorizIcon className='more-btn'/>
            <span>بیشتر</span>
        </a>
    </div>
  )
}

export default Services