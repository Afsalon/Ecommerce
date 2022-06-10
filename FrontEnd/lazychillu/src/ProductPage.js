import React from 'react'
import FootNote from './components/FootNote';
import Products from './components/Products';
import FilterCategory from './components/FilterCategory';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import {Link,useParams} from 'react-router-dom';

const ProductPage = () => {
  return (
    <div className="bg">
      <Navbar/>
      <Navbar2/>
      <Link  className="link12" to='/products'>Products</Link>
      <div className="main">
        <FilterCategory/>
        <Products/>
      </div>
      <FootNote/>
    </div>
  )
}

export default ProductPage;
