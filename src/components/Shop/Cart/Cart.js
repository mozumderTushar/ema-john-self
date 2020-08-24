import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;


    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price
    }

    let shipping = 0;
    if(total>35){
        shipping = 0;
    }else if(total > 15){
        shipping = 4.99;
    }else if(total > 0){
        shipping = 12.99
    }

    const tax = total/10;

    const formateNumber = (num) =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
             <p>Items Ordered: ${cart.length}</p>
             <p>Product Price: ${formateNumber(total)}</p>
             <p><small>Shipping Cost: ${formateNumber(shipping)}</small></p>
            <p><small>Tax + VAT: ${formateNumber(tax)}</small></p>
            <p>Total Price: ${formateNumber(total + shipping + tax)}</p>
        </div>
    );
};

export default Cart;