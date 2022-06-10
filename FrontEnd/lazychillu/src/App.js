import './App.css';
import React,{useEffect} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {useFetch} from './components/useFetch';
import { useNavigate } from 'react-router';
import {reducer} from './components/reducer';
import ProductPage from './ProductPage';
import HomePage from './HomePage';
import Login from './Login';
import ProductDetailPage from './ProductDetailPage';
import CartPage from './CartPage';


export const ContextApi = React.createContext();



function App() {

  const url = "http://127.0.0.1:8000/products/";
  const [state,dispatch] = useFetch(url);

  const update = async () =>{
      const token = JSON.parse(localStorage.getItem('tokens'));
      const refreshToken = token.refresh;
      const response = await fetch('http://127.0.0.1:8000/api/token/'+'refresh/',{
        method:'post',
        headers: {
              'Content-Type': 'application/json',
          },
        body:JSON.stringify({'refresh':refreshToken}),

      }).then(async (response)=>{
        if (response.status == 401){
          localStorage.removeItem('tokens')
        }
        if(response.status == 200){
          const new_access = await response.json()
          localStorage.setItem('tokens',JSON.stringify(new_access));
        }
      })

  }
  useEffect(()=>{
    if (state.isLoading && state.localBool){
      update()
      console.log(localStorage.getItem('tokens'));
    }
    let interval = setInterval(()=>{
        if (state.localBool){
          update()
          console.log(localStorage.getItem('tokens'));
        }
    },1000*10*24)

    return ()=>clearInterval(interval)

  },[state.localBool])


  return (
    <ContextApi.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/products/:id" element={<ProductDetailPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </ContextApi.Provider>
  );
}

export default App;
