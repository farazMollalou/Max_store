import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { mobile_category, product_description, apparel, supermarket_category, stationery_category } from '../../../DataBase'
import Loader from '../../Loader/Loader'
import Header from '../../Header/Header'
import DoneIcon from '@mui/icons-material/Done';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarIcon from '@mui/icons-material/Star';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import CampaignIcon from '@mui/icons-material/Campaign';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ForumIcon from '@mui/icons-material/Forum';
import './ProductPage.scss'
import Feedback from './Feedback/Feedback'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import RocketIcon from '@mui/icons-material/Rocket';
import Footer from '../../Footer/Footer'
import PriceChart from '../../Chart/Chart'
import numberWithComma from '../../CommaHandler'
import swal from 'sweetalert'

function ProductPage() {

    const [colorName, setColorName] = useState('صورتی')
    const [themeColor, setThemeColor] = useState('#E90064')
    const [isColor, setIsColor] = useState([true, false, false, false, false])
    const [isLoaded, setIsLoaded] = useState(true)
    const [tabState, setTabState] = useState([true, false, false, false])

    // const [users, setUsers] = useState(null)

    let par = useParams()
    const store = [mobile_category, apparel, apparel, apparel, supermarket_category, stationery_category]
    const persian_category = ['موبایل و لپ تاپ', 'مد و پوشاک', '', '', 'سوپرمارکت', 'لوازم تحریر']
    const english_category = ['mobile', 'apparel', '', '', 'supermarket', 'stationery']

    let product_type = store[(par.productId.slice(0, 2) % 10) - 1]
    let mainProduct = product_type.find(product => product.product_id === Number(par.productId))
    let mainProduct_info = product_description.find(item => item.company === mainProduct.company)

    let related_products = product_type.filter(product => {
        return ((product.product_id % 10) === Math.floor(Math.random() * 10))
    }).filter(pro => {
        return pro.product_id !== mainProduct.product_id
    }).filter((pr, index) => {
        return index < 5
    })

    const colorList = ['#E90064', '#c0c0c0', '#362FD9', '#FF5B00', '#6F1AB6']

    useEffect(() => {
        if (!isLoaded) {
            setTimeout(() => {
                setIsLoaded(true)
            }, 1000)
            document.title = `${mainProduct.title} - دیجی کالا`
        }
    }, [isLoaded])  //  If the array is empty, it gives an error
    useEffect(() => {
        document.title = `${mainProduct.title} - دیجی کالا`
    }, [])


    function ColorHandler(inp) {
        switch (inp) {
            case 0:
                setIsColor([true, false, false, false, false])
                setThemeColor(colorList[inp])
                setColorName('صورتی')
                break;
            case 1:
                setIsColor([false, true, false, false, false])
                setThemeColor(colorList[inp])
                setColorName('نقره ای')
                break;
            case 2:
                setIsColor([false, false, true, false, false])
                setThemeColor(colorList[inp])
                setColorName('آبی')
                break;
            case 3:
                setIsColor([false, false, false, true, false])
                setThemeColor(colorList[inp])
                setColorName('نارنجی')
                break;
            case 4:
                setIsColor([false, false, false, false, true])
                setThemeColor(colorList[inp])
                setColorName('بنفش')
                break;
            default:
                break;
        }
    }

    function tabStateHandler(inp) {
        switch (inp) {
            case 0:
                setTabState([true, false, false])
                break;
            case 1:
                setTabState([false, true, false])
                break;
            case 2:
                setTabState([false, false, true])
                break;
            default:
                break;
        }
    }

    let newPrice = String(Number(mainProduct.price) * (100 - mainProduct.discount_percent) / 100)

    function goToTop() {
        tabStateHandler(0)
        setIsLoaded(false)
        setTimeout(() => {
            setIsLoaded(true)
        }, 1000)
    }

    const addToBasket = () => {
        swal({
            title: "محصول به سبد اضافه شد!",
            icon: "success",
            timer: 3000,
            buttons: "متوجه شدم!"
        })
    }

    return (
        <>
            {!isLoaded && <Loader loaderType='progressbar' size='250' />}

            {isLoaded &&
                <>

                    <Header />

                    <section className='page-container'>
                        <div className="pagePathBox"> <Link to="/">مـکـث</Link> / <Link to={`/category/${english_category[Number(par.productId.slice(0, 2) % 10) - 1]}`}>{persian_category[Number(par.productId.slice(0, 2) % 10) - 1]}</Link> / <span>{mainProduct.title}</span></div>
                        <hr />
                        <div className="productBox">
                            <div className="image-box"><img src={mainProduct.img_url} alt={mainProduct.title} /></div>
                            <div className="detailCard">
                                <h3 className="product_title">{mainProduct.title}</h3>
                                {mainProduct.company && <div className="comapany-box"><span> شرکت سازنده :  </span> <img src={`/images/brands/products_company/${mainProduct.company}.${mainProduct.company === 'apple' ? 'jpg' : 'png'}`} alt={mainProduct.company} /></div>}
                                <div className="some_info">
                                    <div className="score-box">
                                        <StarIcon className='star' /><span>{mainProduct.score}</span>
                                    </div>
                                    <div className="satisfaction-box">
                                        <ThumbUpIcon className='like' /> <span>{mainProduct.satisfaction}% <span className='customers_number'>( {(((mainProduct.satisfaction * 12) % 10) * 100) + 75} نفر )</span> از خریداران راضی بودند</span>
                                    </div>
                                    {mainProduct.colors && <div className="color-box">
                                        <div className='title'>رنگ :  <span className='color-name' >{colorName}</span></div>
                                        <div className="colors-container">
                                            <span onClick={() => ColorHandler(0)} className={`coLor ${isColor[0]}`} style={{ background: colorList[0] }}>{isColor[0] ? <DoneIcon /> : null}</span>
                                            {mainProduct.colors > 1 ? <span onClick={() => ColorHandler(1)} className={`coLor ${isColor[1]}`} style={{ background: colorList[1] }}>{isColor[1] ? <DoneIcon /> : null}</span> : null}
                                            {mainProduct.colors > 2 ? <span onClick={() => ColorHandler(2)} className={`coLor ${isColor[2]}`} style={{ background: colorList[2] }}>{isColor[2] ? <DoneIcon /> : null}</span> : null}
                                            {mainProduct.colors > 3 ? <span onClick={() => ColorHandler(3)} className={`coLor ${isColor[3]}`} style={{ background: colorList[3] }}>{isColor[3] ? <DoneIcon /> : null}</span> : null}
                                            {mainProduct.colors > 4 ? <span onClick={() => ColorHandler(4)} className={`coLor ${isColor[4]}`} style={{ background: colorList[4] }}>{isColor[4] ? <DoneIcon /> : null}</span> : null}
                                        </div>
                                    </div>}
                                </div>
                            </div>
                            <div className="sellerCard">
                                <div className="seller-row">
                                    <span className='title'>فروشنده</span>
                                    <div className="seller">
                                        <img src="/images/MAX-Fashions.png" alt="max" />
                                        <strong>مـکـــث</strong>
                                    </div>
                                    <div className="performance">
                                        <span>عملکرد : <em>عـالـــــی</em></span>
                                    </div>
                                </div>
                                <span className="seperator"></span>
                                <div className="guarantee">
                                    <HealthAndSafetyIcon className='icon' style={{ color: themeColor }} /> دارای 18 ماه ضمانت کالا
                                </div>
                                <span className="seperator"></span>
                                <div className="send-box">
                                    <div className="store">
                                        <StorefrontIcon className='icon' style={{ color: themeColor }} /> موجود در انبار مکـث
                                    </div>
                                    <div className="delivery">
                                        <TwoWheelerIcon className='icon' style={{ color: themeColor }} /> ارسال فوری و رایگان
                                    </div>
                                </div>
                                <span className="seperator"></span>
                                <div className="club_score">
                                    <MonetizationOnIcon style={{ color: '#F49D1A' }} /> خرید = 100 امتیاز باشگاه مشتریان
                                </div>
                                <div className="end-row">
                                    {mainProduct.isExist ? <div className="price">
                                        {Number(newPrice) < 1_000_000 ? <>{newPrice.slice(0, -3)},{newPrice.slice(-3)} تومان</> :
                                            <>{newPrice.slice(0, -6)},{newPrice.slice(-6, -3)},{newPrice.slice(-3)} تومان</>}
                                    </div> : <div>در حال تأمین ...</div>}
                                    <button className='add-btn' onClick={addToBasket}>اضافه به سبد خرید</button>
                                </div>
                            </div>
                        </div>
                        <div className="return-condition">
                            <InfoIcon className='icon' />
                            <p className='text'>
                                امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.
                            </p>
                        </div>
                        <div className="free-delivery">
                            <div className="text">
                                <CampaignIcon className='icon' />
                                <span>ارسال فوری و رایگان</span>
                            </div>
                            <img src="/images/free-delivery.png" alt="تحویل رایگان" />
                        </div>
                        <div className="services">
                            <div className="item">
                                <AcUnitIcon className='icon' />
                                <span>جشنواره های فصلی</span>
                            </div>
                            <div className="item">
                                <HealthAndSafetyIcon className='icon' />
                                ضمانت صحت کالا
                            </div>
                            <div className="item">
                                <MyLocationIcon className='icon' />
                                تحویل در آدرس دقیق
                            </div>
                            <div className="item">
                                <SupportAgentIcon className='icon' />
                                پشتیبانی شبانه روزی
                            </div>
                            <div className="item">
                                <LocalAtmIcon className='icon' />
                                امکان پرداخت در محل
                            </div>
                        </div>
                        {mainProduct.priceData && <div className="detail-box">
                            <div className="tabs-container">
                                <span className={`item ${tabState[0]}`} onClick={() => tabStateHandler(0)}>معرفی</span>
                                <span className={`item ${tabState[1]}`} onClick={() => tabStateHandler(1)}><ForumIcon className='icon' style={{ color: 'grey' }} /> نظرات</span>
                                <span className={`item ${tabState[2]}`} onClick={() => tabStateHandler(2)}><TrendingUpIcon className='icon' style={{ color: 'grey' }} />روند قیمت</span>
                            </div>
                            <div className="content-box">
                                <div className='content'>
                                    {tabState[0] &&
                                        <>
                                            <h6 className='title'>معرفی</h6>
                                            <article className='product-description'>
                                                <div className="product-section">
                                                    <p className="first_text">{mainProduct_info.mainText}</p>
                                                    <img src={mainProduct_info.product_img} alt={mainProduct.title} />
                                                </div>
                                                <div className="company-section">
                                                    <h5 className='title'>تاریخچۀ شرکت</h5>
                                                    <div className="text-box">
                                                        <div className="text">
                                                            <p className="company1">{mainProduct_info.companyText1}</p>
                                                            <p className="company2">{mainProduct_info.companyText2}</p>
                                                            <img className='company-img' src={mainProduct_info.company_img} alt={mainProduct.company} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </>}
                                    {tabState[1] && <Feedback product={mainProduct} />}
                                    {tabState[2] &&
                                        <>
                                            <div className="chart-wrapper" >
                                                <h4 className="title">روند تغییرات قیمت بر حسب میلیون تومن</h4>
                                                <PriceChart data={mainProduct.priceData} />
                                            </div>
                                            <div className="price-table-container">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>تاریخ معاملات</th>
                                                            <th>قیمت میانگین</th>
                                                            <th>حداقل قیمت</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>6 ماه پیش</td>
                                                            <td>{mainProduct.priceData[0].avg} میلیون تومن</td>
                                                            <td>{mainProduct.priceData[0].min} میلیون تومن</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5 ماه پیش</td>
                                                            <td>{mainProduct.priceData[1].avg} میلیون تومن</td>
                                                            <td>{mainProduct.priceData[1].min} میلیون تومن</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4 ماه پیش</td>
                                                            <td>{mainProduct.priceData[2].avg} میلیون تومن</td>
                                                            <td>{mainProduct.priceData[2].min} میلیون تومن</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3 ماه پیش</td>
                                                            <td>{mainProduct.priceData[3].avg} میلیون تومن</td>
                                                            <td>{mainProduct.priceData[3].min} میلیون تومن</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2 ماه پیش</td>
                                                            <td>{mainProduct.priceData[4].avg} میلیون تومن</td>
                                                            <td>{mainProduct.priceData[4].min} میلیون تومن</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ماه گذشته</td>
                                                            <td>{mainProduct.priceData[5].avg} میلیون تومن</td>
                                                            <td>{mainProduct.priceData[5].min} میلیون تومن</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </>
                                    }
                                </div>
                                <div className="left-side">
                                    <div className="sellerCard">
                                        <div className="seller-row">
                                            <div className="seller">
                                                <img src={mainProduct.img_url} alt="product" />
                                                <div className="text">
                                                    <strong>{mainProduct.title}</strong>
                                                    <div className="color">
                                                        <ColorLensIcon className='icon' style={{ color: themeColor }} />
                                                        <span>{colorName}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="seperator"></span>
                                        <div className="guarantee">
                                            <HealthAndSafetyIcon className='icon' style={{ color: themeColor }} /> دارای 18 ماه ضمانت کالا
                                        </div>
                                        <div className="send-box">
                                            <div className="store">
                                                <StorefrontIcon className='icon' style={{ color: themeColor }} /> موجود در انبار مکـث
                                            </div>
                                            <div className="delivery">
                                                <TwoWheelerIcon className='icon' style={{ color: themeColor }} /> ارسال فوری و رایگان
                                            </div>
                                        </div>
                                        <div className="end-row">
                                            {mainProduct.isExist ? <div className="price">
                                                {Number(newPrice) < 1_000_000 ? <>{newPrice.slice(0, -3)},{newPrice.slice(-3)} تومان</> :
                                                    <>{newPrice.slice(0, -6)},{newPrice.slice(-6, -3)},{newPrice.slice(-3)} تومان</>}
                                            </div> : <div>در حال تأمین ...</div>}
                                            <button onClick={console.log(456)} className='add-btn'>اضافه به 444سبد خرید</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {/* related section  */}
                        <div className="related-products">
                            <div className="title">محصولات مشابه</div>
                            <div className="card-container">
                                {related_products.map(pr =>
                                    <div className="product-card" key={pr.product_id}>
                                        <Link to={`/products/${pr.product_id}`} className="product-card" onClick={goToTop}>
                                            <img src={pr.img_url} alt={pr.title} />
                                            <h5 className="product_name">{pr.title}</h5>
                                            {/* {pr.delivery ? <span className='option'>ارسال ویژه امروز <RocketIcon className='rocket-icon' /></span> :
                                                <span className='option'> همراه با هدیه خرید <CardGiftcardIcon className='gift-icon' /></span>} */}
                                            {/* <span className='price'>{pr.price.slice(0, -6)},{pr.price.slice(-6, -3)},{pr.price.slice(-3)} تومن</span> */}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                    <Footer />
                    <div className="fix-card">
                        {mainProduct.isExist && <span className="price">
                            <span>
                                {/* {!mainProduct.isExist && "درحال تأمین ..."} */}
                                    {numberWithComma(newPrice)}
                            </span> تومان
                        </span>}
                        {!mainProduct.isExist && <span>درحـال تـأمـیـن</span>}
                        {mainProduct.isExist && <button className='add-btn' onClick={addToBasket}>اضافه به سبد خرید</button>}
                    </div>
                </>
            }
        </>
    )
}

export default ProductPage