import React,{useContext} from 'react'
import cat from './cat.png';
import {Link,useParams} from 'react-router-dom';
import {ContextApi} from '../App';

const Navbar = () => {
  const {state,dispatch} = useContext(ContextApi);

  return (
    <>
    <div className="navbar">
      <div className="logo">
        <Link className="logoimgname" to='/'><p>Lazy<span className="cat">Cat</span></p></Link>
      </div>

      <ul className='navbarLinks'>
        <li><Link className='link1' to='/'>Home</Link></li>
        <li><Link className='link1' to='/products'>Products</Link></li>
      </ul>

      <div className="loginCart">
        <Link className='cartlink' to='/cart'><p>Cart<span className="fas fa-shopping-cart"></span></p></Link>
        {state.localBool?
        <p className='loginLink' onClick={()=>{dispatch({type:"LOGOUT"})}}>Logout<span className="fas fa-user"></span></p>:
        <Link className='loginLink' to='/login'><p>Login<span className="fas fa-user"></span></p></Link>}
      </div>


    </div>
    <div className="nOFcart">{state.cartItems.length}</div>
    </>
  )
}

export default Navbar;
