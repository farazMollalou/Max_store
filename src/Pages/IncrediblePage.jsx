import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import IncredibleSlider from '../Components/IncrediblePage/IncredibleSlider/IncredibleSlider';
import IncredibleProductsBox from '../Components/IncrediblePage/productsBox/ProductsBox';

function IncrediblePage() {
    let par = useParams()

    return (
        <>
            <Header />
            <IncredibleSlider parameter={par.categoryId}/>
            <IncredibleProductsBox category={par.categoryId}/>
            <Footer />
        </>
    )
}

export default IncrediblePage