import React,{useEffect,useState} from 'react'
import {Link,useParams} from 'react-router-dom';
import ProductDetailTemplate from './components/ProductDetailTemplate';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import FootNote from './components/FootNote';
const ProductDetailPage = () => {
  const url = "http://127.0.0.1:8000/products/"
  const {id} = useParams();
  const [data,setData] = useState([]);

// FETCH
const getData = async() =>{
  const response = await fetch(url+id+"/");
  const product = await response.json();
  setData(product);
}
useEffect(()=>{
  getData()
},[])

// RETURN
  return (
    <>
      <Navbar/>
      <Navbar2/>
      <Link  className="link12" to='/products'>Products</Link>
      <Link className="detailName" to={`/products/${id}`}>/ {data.name}</Link>
      <ProductDetailTemplate {...data}/>
      <FootNote/>
    </>
  )
}

export default ProductDetailPage;
