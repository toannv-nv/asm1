
import './App.css'
import Content from './compoments/content'
import Header from './compoments/header'
import Footer from './compoments/footer'
import ProductList from './compoments/product-list'
import { Route, Routes } from 'react-router-dom'
import Home from './compoments/home'
import ProductDetail from './compoments/product-detail'
import Products from './compoments/products'

function App() {
  return (
    <Routes>
      <Route path='/'Component={Home}/>
      <Route path='details/:id' Component={ProductDetail}/>
      <Route path='products' Component={Products}/>
    </Routes>
  )
}

export default App

