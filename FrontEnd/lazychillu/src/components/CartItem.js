import React,{useState,useContext} from 'react'
import {Link,useParams} from 'react-router-dom';
import {ContextApi} from '../App';

const CartItem = (props) => {
  const {state,dispatch} = useContext(ContextApi);
  const {id,photo, name,description, brand, isAvailable, price, category,amount} = props;
  const url = "http://127.0.0.1:8000";

  console.log(props);
  return (
    <div key={id} className="table">

      <div className="tableImageDiv">
        <img className="tableImage" src={url+photo+"/"} alt="{name}"/>
        <div className="tablename">
          {name.length>12?
          <h5 className="cartProductName" title={name}>{name.substring(0,9)}...</h5>:
          <h5 className="cartProductName" title={name}>{name}</h5>}
        </div>
      </div>
      <p className="price pr">&#8377;{price}</p>
      <div className="quantityDiv">
        <button  className="pra1" type="button" onClick={()=>dispatch({type:"SUBTRACT_OVERWRITE", payload:id})}>_</button>
        <p className="pra2">{amount}</p>
        <button className="pra3" type="button" onClick={()=>dispatch({type:"ADD_OVERWRITE", payload:id})}>+</button>
      </div>
      <p className="price prs" >&#8377;{amount*price}</p>
      <button className="fas fa-trash" onClick={()=>{
          dispatch({type:"REMOVEITEM",payload:id})
        }}></button>
    </div>
  )
}

export default CartItem;
