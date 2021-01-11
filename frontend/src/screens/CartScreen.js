import React from "react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemovefromCart } from "../actions/cartActions";

function CartScreen(props) {
  const addtocart = useSelector((state) => state.addtocart);
  const { cartItems } = addtocart;
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
var temp = 0;
var qty1 =0;

  const RemovefromCartHandler = (productId) =>
  {
      dispatch(RemovefromCart(productId))

  }

  useEffect(() => {
    
    if (productId) {
      dispatch(AddToCart(productId, qty));
    }
  }, []);

  return (
    <div className="cart-details">
        <div className="cart-label">Items in Cart</div>
      
        
        {cartItems.length === 0 ? (
          <div className="cart-status">No items in Cart</div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="item">
                <img src={item.image} className="cart-p-img" alt="prod"></img>
                <div className='item-details'>
                    <div className='item-name'>{item.name}</div>
                    <div className='item-price'>₹ {item.price}</div>
                    <div className='qty-container'>Qty : &nbsp;
                    <select className='item-qty' value={item.Quantity} onChange={(e)=>dispatch(AddToCart(item.product,e.target.value))}>
                    {[...Array(item.countInStock).keys()].map(x=>
                            <option key={x+1} value={x+1}>{x+1}</option>)}
                    </select>
                    </div>
                    <button className='delete-cart' onClick={()=> {RemovefromCartHandler(item.product)}}>Remove from Cart</button>
                </div>
                <div className="temp">{temp = item.price*item.Quantity} </div>
                <div className="temp">{qty1 = item.Quantity} </div>
                <div className="subtotal">
                 
                     ₹ {item.price} &nbsp; X &nbsp; {item.Quantity} &nbsp; = &nbsp;  <div className="item-subtotal"> ₹ {temp} </div>
                </div>


            
              </div>
            ))}
          </div>
        )}
     <div className="total">
          <div className='total-text'>Subtotal ( {qty1} items) : $ {temp} </div>

          <button className="checkout_btn">Proceed to checkout</button>
     
     </div>
    </div>
  
                      
  );
}

export default CartScreen;
