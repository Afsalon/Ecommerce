import React,{useContext} from 'react'
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import FootNote from './components/FootNote';
import CartItem from './components/CartItem';
import {Link,useParams} from 'react-router-dom';
import {ContextApi} from './App';

const CartPage = () => {
  const {state,dispatch} = useContext(ContextApi);
    return (
      <React.Fragment>
        <Navbar/>
        <Navbar2/>
        <p className="link13">Cart</p>
        <div className="cartBody">
          {state.cartItems.length==0?
          <div>
            <h2 className="Empty">Your Cart is empty</h2>
            <Link to="/products" className="continueShopping1">Continue Shopping</Link>
          </div>:
          <div>
            <div className="tableLegends">
              <p>Item</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            <hr className="horizontalLine1"/>
            {state.cartItems.map((obj)=>{
              return <CartItem key={obj.id} {...obj}/>
            })}
            <hr className="horizontalLinem"/>
            <div className="buttonDiv">
              <Link to="/products" className="continueShopping">Continue Shopping</Link>
              <button className="clearCart" onClick={()=>dispatch({type:"CLEARCART"})}>Clear Cart</button>
            </div>
            <div className="payment">
                <h4 className="subtotal">Subtotal:</h4><span className="subtotalSpan">&#8377;{state.value}</span>
                <p className="shipping" >Shipping Fee:</p><span className="shippingSpan">&#8377;{100}</span>
                <hr className="horizontalLine2"/>
                <p className="ordertotal">Order Total:</p><span className="ordertotalSpan">&#8377;{state.value + 100}</span>
            </div>
              {state.localBool?
              <Link className='loginLink' to='/login'><button type="button" className="loginCartButton">Pay Now</button></Link>:
              <Link className='loginLink' to='/login'><button type="button" className="loginCartButton">Login</button></Link>}
        </div>
    }
        </div>
        <FootNote/>
      </React.Fragment>
    )
}

export default CartPage;
