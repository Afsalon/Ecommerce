import React,{useEffect,useState} from 'react'
import Context from './context';

export const useFetch = (url) => {

  const [state,dispatch] = Context();
  
  const getData = async() =>{
    const response = await fetch(url)
    const data = await response.json()
    dispatch({type:"FETCH",payload:data})
  }
  useEffect(()=>{
    getData()
  },[])
  return [state,dispatch]
}
