import React, { useContext } from 'react'
import "./CartItem.css"
import { ShopContext } from '../../Context/ShopContext';


import remove_icon from "../Assets/cart_cross_icon.png"


const CartItem = () => {
    const { getTotalCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartItems'>

            <div className="cartItem_format_main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div key={e.id}>
                        <div className="cartItem_format cartItem_format_main">
                            <img src={e.image} alt="" className='cartIcon_ProductIcon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartItem_quantity'>{cartItem[e.id]}</button>
                            <p>${e.new_price * cartItem[e.id]}</p>
                            <img className='cartItem_removeIcon' src={remove_icon} alt="" onClick={() => removeFromCart(e.id)} />
                        </div>
                        <hr />
                    </div>
                }
                return null;

            })}


            <div className='cartItem_down'>
                <div className="cartItem_total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartItem_totalItem">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartItem_totalItem">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItem_totalItem">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItem_promocode">
                    <p>If you have a promocode , Enter it here</p>
                    <div className="cartItem_promoBox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItem
