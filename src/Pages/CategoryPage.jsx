import { useState, useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { useParams, useLocation } from 'react-router-dom';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { apparel, stationery_category, supermarket_category, mobile_category } from '../DataBase';
import ProductCard from '../Components/ProductComponents/ProductCard/ProductCard';
import '../Components/ProductComponents/CategoryPage.scss';

function CategoryPage() {
  const [showExist, setShowExist] = useState(false)
  const store = [mobile_category, apparel, supermarket_category, stationery_category]
  let param = useParams()
  const { pathname } = useLocation()




  const [mainProducts, setMainProducts] = useState([])
  const [loadProducts, setLoadProducts] = useState(true)
  
  useEffect(() => {
    switch (param.category) {
      case 'mobile':
        setMainProducts(store[0])
        break;
      case 'apparel':
        setMainProducts(store[1])
        break;
      case 'supermarket':
        setMainProducts(store[2])
        break;
      case 'stationery':
        setMainProducts(store[3])
        break;
      default:
        break;
    }
  }, [])
  useEffect(() => {
    switch (param.category) {
      case 'mobile':
        setMainProducts(store[0])
        break;
      case 'apparel':
        setMainProducts(store[1])
        break;
      case 'supermarket':
        setMainProducts(store[2])
        break;
      case 'stationery':
        setMainProducts(store[3])
        break;
      default:
        break;
    }
  }, [pathname])
  useEffect(() => {
    if (!loadProducts) {
      setLoadProducts(true)
    }
  }, [loadProducts])

  useEffect(() => {
    if (showExist) {
      setMainProducts(pre => pre.filter(item => item.isExist))
    } else {
      switch (param.category) {
        case 'mobile':
          setMainProducts(store[0])
          break;
        case 'apparel':
          setMainProducts(store[1])
          break;
        case 'supermarket':
          setMainProducts(store[2])
          break;
        case 'stationery':
          setMainProducts(store[3])
          break;
        default:
          break;
      }
    }
  }, [showExist])
  
  const sortFunc = (inp) => {
    switch (inp) {
      case 1:
        setMainProducts(pre => pre.sort((a, b) => (b.score - a.score)))
        setLoadProducts(false)
        break;
      case 2:
        setMainProducts(pre => pre.sort((a, b) => (Number(b.price) - Number(a.price))))
        setLoadProducts(false)
        break;
      case 3:
        setMainProducts(pre => pre.sort((a, b) => (Number(a.price) - Number(b.price))))
        setLoadProducts(false)
        break;
      case 4:
        setMainProducts(pre => pre.sort((a, b) => (b.discount_percent - a.discount_percent)))
        setLoadProducts(false)
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Header />

      <section className='product-box'>
        <div className="box-header">
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
              |
              <div className='switch-box'>
                <span className='text'>کالاهای موجود </span>
                <div className={showExist ? 'switch-bg on' : 'switch-bg'} onClick={() => setShowExist(pre => !pre)}>
                  <span className="circle"></span>
                </div>
              </div>
            </div>
            <span className='count'>{mainProducts.length} کالا</span>
          </div>
        </div>
        <div className="cards_container">
          {mainProducts.map(p => <ProductCard product={p} key={p.product_id} />)}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default CategoryPage