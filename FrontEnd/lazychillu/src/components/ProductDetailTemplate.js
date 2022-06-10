import React,{useContext,useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom';
import {ContextApi} from '../App';

const ProductDetailTemplate = (props) => {
  const {state,dispatch} = useContext(ContextApi);
  const url = "http://127.0.0.1:8000";
  const {id,photo, name,description, brand, isAvailable, price, category,amount} = props;
  const [am,setAm] = useState(1);


// return
  return (
    <div className="detailPageBody">

      <div className="detailImagediv">
        <Link className="productButton" to='/products'>Back To Products</Link>
        <img className="detailImage" src={url+photo+"/"} alt="{name}"/>
      </div>

      <div className="detailInfo">
        <h2 className="DetailInfoName">{name}</h2>
        <h5 className="DetailInfoPrice">&#8377;{price}</h5>
        <p className="DetailInfoDescription">{description}</p>
        <h5 className="DetailInfoAvailable">Available :<span className="availableSpan"> {isAvailable? "In Stock":"Not In Stock"}</span></h5>
        <h5 className="DetailInfoBrand">Brand :<span className="brandSpan"> {brand}</span></h5>
        <h5 className="DetailInfoCategory">Category :<span className="categorySpan"> {category}</span></h5>
        <hr className="horizontalLine"/>
        <div className='cartAmount'>
          <button className="decrement" type="button" onClick={ ()=>{
              if (am > 1){
                setAm(am-1)
              }
            }
          }>_</button>
          <h5 className="amount">{am}</h5>
          <button className="increment" type="button" onClick={()=>setAm(am+1)}>+</button>
        </div>
        <button type="button" className="cartButton" onClick={() =>dispatch( {type:"ADD_ITEM",payload:{am,id}})}>Add To Cart</button>
      </div>

    </div>
  )
}

export default ProductDetailTemplate;
