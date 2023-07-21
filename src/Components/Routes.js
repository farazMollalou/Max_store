import CategoryPage from "../Pages/CategoryPage"
import IncrediblePage from "../Pages/IncrediblePage"
import MainPage from "../Pages/MainPage"
import NotFound from "../Pages/NotFound"
import ProductPage from "./ProductComponents/ProductPage/ProductPage"

export const routes = [
    {path: '/', element: <MainPage />},
    // {path: '/max-shop', element: <MainPage />},
    {path: '/incredible-offers/:categoryId', element: <IncrediblePage />},
    {path: '/products/:productId', element: <ProductPage />},
    {path: '/category/:category', element: <CategoryPage />},
    {path: '*', element: <NotFound />}
]