import React,{useEffect,useContext} from 'react'
import {useFetch} from './useFetch';
import ProductTemplate from './ProductTemplate';
import Context from './context';
import {ContextApi} from '../App';
const Products = () => {
  const {state,dispatch} = useContext(ContextApi);
  // console.log(state,dispatch)

  if (state.isLoading){
    return(
      <h1 className="Loading">Loading....</h1>
    )
  }

  return (
    <div className='products'>
      {state.productObjects.map((obj) => {
        return <ProductTemplate key={obj.id} {...obj}/>
      })}
    </div>
  )

}

export default Products;
