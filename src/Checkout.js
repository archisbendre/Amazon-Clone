import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function Checkout() {

    const [{ basket }] = useStateValue();

    return <div className="checkout">
        
            {basket?.length == 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>You have no items in your basket. To buy one or more items click on "Add to Basket" next to the item.</p>
                </div>
            ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* List out all the checkout products*/}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />

                        ))}
                    </div>
                )}
        
        
    </div>;

}

export default Checkout
