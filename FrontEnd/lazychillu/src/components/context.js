import React,{useReducer} from 'react'
import {useFetch} from './useFetch';
import {reducer} from './reducer';

const Context = () => {


  const initialState = {
    primarySearch:"originalList",
    cartItems:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[],
    searchList:{},
    filterList:{},
    brandList:{},
    colorList:{},
    productObjects:{},
    originalList:{},
    cartList:{},
    isLoading:true,
    isError:false,
    value:localStorage.getItem('value')?parseInt(localStorage.getItem('value')):0,
    localBool:localStorage.getItem('tokens')?true: false,
    error:"",
  }
  const [state,dispatch] = useReducer(reducer,initialState);
  return [state,dispatch]

}



export default Context;
