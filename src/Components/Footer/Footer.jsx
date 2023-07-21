import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
    return (
        <footer className='footer'>
            <div className="subscribe-box">
                <span> از تخفیفات و جشنواره ها جا نمونی!</span>
                <div className="email-box">
                    <input type="email" className='email-field' placeholder='ایمیل شما' />
                    <button>ثبت</button>
                </div>
            </div>
            <div className="row1">
                <div className="brand-box">
                    <img src="/images/MAX-Fashions.png" alt="logo" />
                    <div className="text">
                        <span>تلفن پشتیبانی 021-654122</span>
                        <span className='line'></span>
                        <span>7 روز هفته 24 ساعته پاسخگوی شما هستیم</span>
                    </div>
                </div>
                <div className="social-media">
                    <span className='title'>هـمـراه ما باشیــد!</span>
                    <div className="icon-container">
                        <a href="#"><TelegramIcon className='tel icon'/></a>
                        <a href="#"><YouTubeIcon className='yout icon'/></a>
                        <a href="#"><FacebookIcon className='face icon'/></a>
                        <a href="#"><InstagramIcon className='ins icon'/></a>
                    </div>
                </div>
            </div>
            <div className="links-container">
                <div className="with-max link-box">
                    <h6>با مکث</h6>
                    <a href="#">خبرنامه</a>
                    <a href="#">همکاری در فروش</a>
                    <a href="#">فرصت های شغلی</a>
                    <a href="#">گزارش تخلف</a>
                    <a href="#">دربارۀ مکث</a>
                </div>
                <div className="customer-services link-box">
                    <h6>خدمات مشتریان</h6>
                    <a href="#">راهنمای خرید</a>
                    <a href="#">فرایند مرجوع کالا</a>
                    <a href="#">پرسش های متداول</a>
                    <a href="#">گزارش باگ</a>
                </div>
                <div className="branch link-box">
                    <h6>شعب سراسری</h6>
                    <a href="#">تهران</a>
                    <a href="#">تبریز</a>
                    <a href="#">شیراز</a>
                    <a href="#">اصفهان</a>
                    <a href="#">کرج</a>
                </div>
                <div className="special-services link-box">
                    <h6>باشگاه مشتریان</h6>
                    <a href="#">قرعه کشی هفتگی</a>
                    <a href="#">خرید اعتباری</a>
                    <a href="#">هدیه تولد</a>
                    <a href="#">تخفیفات و جشنواره ها</a>
                </div>
            </div>
            <div className="copy-right-box">
                <p>طراحی توسط <strong>فراز ملالو</strong> | تمام حقوق محفوظ است</p>
            </div>
        </footer>
    )
}

export default Footer