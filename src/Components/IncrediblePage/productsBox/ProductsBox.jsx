import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './ProductsBox.scss'
import { apparel, mobile_category, stationery_category, supermarket_category } from '../../../DataBase'
import ProductCard from '../../ProductComponents/ProductCard/ProductCard'

function IncredibleProductsBox() {
  let products_categories = [mobile_category, apparel, apparel, apparel, supermarket_category, stationery_category]
  const { pathname } = useLocation()

  const [category, setCategory] = useState(pathname.slice(-2))
  const [mainCategory, setMainCategory] = useState(products_categories[(category % 10) - 1].filter(item => item.discount_percent))

  useEffect(() => {
    setCategory(pathname.slice(-1))
    setMainCategory(products_categories[(pathname.slice(-1) % 10) - 1].filter(item => item.discount_percent))
  }, [pathname])

  const [load, setLoad] = useState(true)

  useEffect(() => {
    if (!load) {
      setLoad(true)
    }
  }, [load])


  const sortFunc = (inp) => {
    switch (inp) {
      case 1:
        setMainCategory(pre => pre.sort((a, b) => (b.score - a.score)))
        setLoad(false)
        break;
      case 2:
        setMainCategory(pre => pre.sort((a, b) => (Number(b.price) - Number(a.price))))
        setLoad(false)
        break;
      case 3:
        setMainCategory(pre => pre.sort((a, b) => (Number(a.price) - Number(b.price))))
        setLoad(false)
        break;
      case 4:
        setMainCategory(pre => pre.sort((a, b) => (b.discount_percent - a.discount_percent)))
        setLoad(false)
        break;
      default:
        break;
    }
  }

  return (
    <section className='IncredibleProductsBox'>
      <div className="box-header">
        <h5>همۀ شگفت انگیزها</h5>
        <div className="sort-row">
          <div className="sorting-tabs">
            <div className="icon-box">
              <SortIcon className='sort-icon' />
              <KeyboardBackspaceIcon className='arrow-icon' />
            </div>
            <span className='item' onClick={() => sortFunc(1)}>محبوب ترین ها</span>
            <span className='item' onClick={() => sortFunc(2)}>گرانترین</span>
            <span className='item' onClick={() => sortFunc(3)}>ارزانترین</span>
            <span className='item' onClick={() => sortFunc(4)}>بیشترین تخفیف</span>
          </div>
          <span className='count'>{mainCategory.length} کالا</span>
        </div>
      </div>
      <div className="cards_container">
        {mainCategory.map(p => <ProductCard product={p} key={p.product_id} />)}
      </div>
    </section>
  )
}

export default IncredibleProductsBox