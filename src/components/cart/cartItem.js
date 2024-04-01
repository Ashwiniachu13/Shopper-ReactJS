import React, { useContext } from 'react'
import './cartItem.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import emptycart from '../Assets/empty cart.gif'

const CartItem=()=>{
const {getTotalCartAmount, all_product,cartItems,removeFromCart, updateCartItemQuantity}=useContext(ShopContext);

// check if cart is empty
const isCartEmpty=Object.values(cartItems).every(quantity=>quantity===0);

    return(
        <div className="cartitems">
            {isCartEmpty?(
                <div className='empty-cart-message'>
                    <p>Your cart is empty</p>
                  
                        <img  className="empty" src={emptycart}/>
                        
                    </div>
            ):(
                <React.Fragment>
     <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
     </div>
     <hr/>
     {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return(
                <div>
                <div className='classitems-format cartitems-format-main'>
                    <img src={e.image} alt="" className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <div className="cartitems-quantity-controls">
                                            <button onClick={() => updateCartItemQuantity(e.id, cartItems[e.id] - 1)}>-</button>
                                            <button>{cartItems[e.id]}</button>
                                            <button onClick={() => updateCartItemQuantity(e.id, cartItems[e.id] + 1)}>+</button>
                                        </div>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                            </div>
                            <hr/>
             </div> 
        
             );
            }
            return null;
            
                
            
 
     })}
     <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>Cart Total</h1>
            <div>
                <div className='cartitems-total-item'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
              
                <div className='cartitems-total-item'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
               
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
        
        </div>
     </div>
     
     </React.Fragment>
            )}
             
    </div>
   

    )
    }
    
export default CartItem;