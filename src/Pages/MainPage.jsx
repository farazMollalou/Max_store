import React, { useState, useEffect } from 'react';
import Slider from '../Components/amazing_slider/Slider'
import BrandSection from '../Components/Brands/Brand'
import CategorySection from '../Components/Category_section/Category_section'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import MainSlider from '../Components/MainSlider/MainSlider'
import Services from '../Components/services/Services'
import SpecialAds from '../Components/special_ads/SpecialAds'
import TrendProductsSlider from '../Components/Trends/Trend_products_slider/TrendProductsSlider'
import Loader from '../Components/Loader/Loader'

function MainPage() {
  return (
    <>
      <Header />
      <MainSlider />
      <Services />
      <Slider />
      <CategorySection />
      <SpecialAds />
      <TrendProductsSlider />
      <BrandSection />
      <Footer />
    </>
  )
}

export default MainPage