import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './MainSlider.css'

function MainSlider() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    })

    const imgRef = ['./images/slider/slider1.jpg', './images/slider/slider2.jpg', './images/slider/slider3.jpg', './images/slider/slider4.jpg', './images/slider/slider5.jpg', './images/slider/slider6.jpg', './images/slider/slider7.gif']
    const imgRef_sm = ['./images/slider/_slider1.jpg', './images/slider/_slider2.jpg', './images/slider/_slider3.jpg', './images/slider/_slider4.jpg', './images/slider/_slider5.jpg', './images/slider/_slider6.jpg', './images/slider/_slider7.gif']

    return (
        <Carousel fade className='carousel-container'>
            <Carousel.Item interval={2000}>
                <a href="https://www.digikala.com/landing/menswear_brand/?&promo_name=%D8%A8%D8%B1%D8%AA%D8%B1%DB%8C%D9%86+%D8%A8%D8%B1%D9%86%D8%AF+%D9%87%D8%A7%DB%8C+%D9%BE%D9%88%D8%B4%D8%A7%DA%A9+%D9%85%D8%B1%D8%AF%D8%A7%D9%86%D9%87&promo_position=home_slider_new_v2&promo_creative=138896&bCode=138896" target="_blank" rel='noreferrer'>
                    <img
                        className="d-block w-100 sld-img"
                        src={windowWidth > 800 ? imgRef[0] : imgRef_sm[0]}
                        alt="First slide"
                    />
                </a>
            </Carousel.Item>

            {/* # 2 # */}
            <Carousel.Item interval={2000}>
                <a href="https://www.digikala.com/landing/jomebazar_khodro/?&promo_name=%D8%AC%D9%85%D8%B9%D9%87+%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1+%D8%AE%D9%88%D8%AF%D8%B1%D9%88&promo_position=home_slider_new_v2&promo_creative=127273&bCode=127273" target="_blank" rel='noreferrer'>
                    <img
                        className="d-block w-100 sld-img"
                        src={windowWidth > 800 ? imgRef[1] : imgRef_sm[1]}
                        alt="Second slide"
                    />
                </a>
            </Carousel.Item>

            {/* # 3 # */}

            <Carousel.Item interval={2000}>
                <a href="https://www.digikala.com/landing/mi-bro/?&promo_name=%D9%81%D8%B1%D9%88%D8%B4+%D9%88%DB%8C%DA%98%D9%87+%D8%B3%D8%A7%D8%B9%D8%AA+%D9%85%DB%8C%D8%A8%D8%B1%D9%88&promo_position=home_slider_new_v2&promo_creative=138563&bCode=138563" target="_blank" rel='noreferrer'>
                    <img
                        className="d-block w-100 sld-img"
                        src={windowWidth > 800 ? imgRef[2] : imgRef_sm[2]}
                        alt="Third slide"
                    />
                </a>
            </Carousel.Item>

            {/* # 4 # */}

            <Carousel.Item interval={2000}>
                <a href="https://www.digikala.com/landing/kioskonline/?&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE-%D8%AF%DB%8C%D8%AC%DB%8C+%D9%85%D9%87%D8%B1&promo_position=home_slider_new_v2&promo_creative=138211&bCode=138211" target="_blank" rel='noreferrer'>
                    <img
                        className="d-block w-100 sld-img"
                        src={windowWidth > 800 ? imgRef[3] : imgRef_sm[3]}
                        alt="Fourth slide"
                    />
                </a>
            </Carousel.Item>

            {/* # 5 # */}
            <Carousel.Item interval={2000}>
                <a href="https://www.digikala.com/product/dkp-365525/%D8%AF%D8%B3%D8%AA%DA%AF%D8%A7%D9%87-%D8%AA%D8%B5%D9%81%DB%8C%D9%87-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D9%87%D9%88%D8%A7-%D9%87%D8%A7%D9%86%DB%8C%D9%88%D9%84-%D9%85%D8%AF%D9%84-kj250f-p11wg/?&promo_name=%D8%AA%D8%B5%D9%81%DB%8C%D9%87+%D9%87%D9%88%D8%A7&promo_position=home_slider_new_v2&promo_creative=132820&bCode=132820" target="_blank" rel='noreferrer'>
                    <img
                        className="d-block w-100 sld-img"
                        src={windowWidth > 800 ? imgRef[4] : imgRef_sm[4]}
                        alt="Fifth slide"
                    />
                </a>
            </Carousel.Item>

            {/* # 6 # */}

            <Carousel.Item interval={2000}>
                <a href="https://www.digikala.com/landing/FathersDay-Sport/?&promo_name=%D8%B1%D9%88%D8%B2+%D9%BE%D8%AF%D8%B1+-+%D9%88%D8%B1%D8%B2%D8%B4+%D9%88+%D8%B3%D9%81%D8%B1&promo_position=home_slider_new_v2&promo_creative=139034&bCode=139034" target="_blank" rel='noreferrer'>
                    <img
                        className="d-block w-100 sld-img"
                        src={windowWidth > 800 ? imgRef[5] : imgRef_sm[5]}
                        alt="Sixth slide"
                    />
                </a>
            </Carousel.Item>

            {/* # 7 # */}

            <Carousel.Item interval={2000}>
                <a href="https://www.digikala.com/landing/FathersDay-Sport/?&promo_name=%D8%B1%D9%88%D8%B2+%D9%BE%D8%AF%D8%B1+-+%D9%88%D8%B1%D8%B2%D8%B4+%D9%88+%D8%B3%D9%81%D8%B1&promo_position=home_slider_new_v2&promo_creative=139034&bCode=139034" target="_blank" rel='noreferrer'>
                    <img
                        className="d-block w-100 sld-img"
                        src={windowWidth > 800 ? imgRef[6] : imgRef_sm[6]}
                        alt="Sixth slide"
                    />
                </a>
            </Carousel.Item>

        </Carousel>
    )
}

export default MainSlider;