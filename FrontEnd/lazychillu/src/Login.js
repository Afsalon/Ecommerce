import React,{useState,useContext,useEffect} from 'react'
import login from './components/login.jpeg';
import { useNavigate } from 'react-router';
import {ContextApi} from './App';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const url= "http://127.0.0.1:8000/api/token/";
  const nav = useNavigate();
  const {state,dispatch} = useContext(ContextApi);

  const handleSubmit = async (e) =>{
    e.preventDefault();
      const response = await fetch(url,{
      method:'post',
      headers: {
            'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        email:email,
        password:password,
      })
    }).then(async (response)=>{
      if(response.status!==200)
       {
          throw new Error(response.status)
       }
      if (response.status == 200){
        const data = await response.json();
        setEmail("");
        setPassword("");
        dispatch({type:"LOGIN",payload:data});
        localStorage.getItem('tokens')?nav('/'):nav('/login');
      }
    }).catch(function(error)
    {
      dispatch({type:"ERRORMESSAGE",payload:"Invalid Login"})
      console.clear();
    })

  }

  useEffect(()=>{
    state.localBool?nav('/'):nav('/login');
  },[])



  return (
    <div style={{backgroundImage: `url(${login})`}} className="loginbanner">
        <div className="formDiv">
            <p className="Errormessage">{state.error}</p>
            <h1 className="lazy">Lazy<span className="cat1">Cat</span></h1>
            <form className="loginForm" onSubmit={(e)=>handleSubmit(e)}>
                <span className="far fa-paper-plane"></span>
                <input className="loginFormInput" type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <span className="fas fa-fingerprint"></span>
                <input className="loginFormInput" type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button className="loginFormSubmit" type="submit" name="button">LOGIN</button>
           </form>
        </div>
     </div>
  )
}

export default Login;
