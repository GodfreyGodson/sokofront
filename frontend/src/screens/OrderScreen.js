// finaversion


// const CheckoutSteps = {
//     render: (props) => {
//         return `
//             <div class="checkout-steps">
//                 <div class="${props.step1 ? 'active' : ''}">Sign In</div>
//                 <div class="${props.step2 ? 'active' : ''}">Shipping</div>
//                 <div class="${props.step3 ? 'active' : ''}">Payment</div>
//                 <div class="${props.step4 ? 'active' : ''}">Place Order</div>
//             </div>
//         `;
//     }
// };

// const convertCartToOrder = () => {
//     const getCartItems = () => {
//         const cartItems = localStorage.getItem('cartItems')
//             ? JSON.parse(localStorage.getItem('cartItems')).filter((item) => item !== null && item !== undefined)
//             : [];
//         return cartItems;
//     };

//     const orderItems = getCartItems();

//     if (orderItems.length === 0) {
//         document.location.hash = '/cart';
//     }

//     const getShipping = () => {
//         const shipping = localStorage.getItem('shipping') ?
//             JSON.parse(localStorage.getItem('shipping')) :
//             {
//                 address: '',
//                 city: '',
//                 postalCode: '',
//                 country: '',
//             };
//         return shipping;
//     };

//     const shipping = getShipping();

//     if (!shipping.address) {
//         document.location.hash = '/shipping';
//     }

//     const getPayment = () => {
//                     const payment = localStorage.getItem('payment') ?
//                         JSON.parse(localStorage.getItem('payment')) :
//                         {
//                             paymentMethod: 'Cash',
//                         };
//                     console.log('Payment from local storage:', payment);
//                     return payment;
//                 };
                
//                 const paye = getPayment();
//                         // Explicitly handle the payment method
//         const paymentMethode = paye && paye.paymentMethod ? paye.paymentMethod : 'Cash';

//     if (paye.paymentMethod) {
//         document.location.hash = '/payment';
//     }

//     const itemsPrice = orderItems.reduce((a, c) => a + c.price * c.qty, 0);
//     const shippingPrice = itemsPrice > 100 ? 0 : 10;
//     const taxPrice = Math.round(0.18 * itemsPrice * 100) / 100;
//     const totalPrice = itemsPrice + taxPrice;

//     return {
//         orderItems,
//         shipping,
//         paye,
//         itemsPrice,
//         shippingPrice,
//         totalPrice,
//         paymentMethode,
//         taxPrice
//     };
// };

// const OrderScreen = {
//     after_render: () => {
        

//     },
//     render: () => {
//         const {
//             orderItems,
//             shipping,
//             paye,
//             itemsPrice,
//             shippingPrice,
//             totalPrice,
//             paymentMethode,
//             taxPrice
//         } = convertCartToOrder();

//         return `
//             <div>
//                 ${CheckoutSteps.render({ step1: true, step2: true, step3: true, step4: true })}
//                     <div class="vs-cart-wrapper space-md-bottom">
//     <div class="container">
//         <!-- Other cart content here -->
//         <form action="#" class="woocommerce-cart-form">
//             <table class="cart_table">
//                 <thead>
//                     <tr>
//                         <th class="cart-col-image">Image</th>
//                         <th class="cart-col-productname">Product Name</th>
//                         <th class="cart-col-price">Price</th>
//                         <th class="cart-col-quantity">Quantity</th>
//                         <th class="cart-col-total">Total</th>
                
//                     </tr>
//                 </thead>
//                 <tbody>
//                     ${orderItems.map(item => `
//                         <tr>
//                             <td class="cart-col-image">
//                                 <img src="${item.image}" alt="${item.name}"/>
//                             </td>
//                             <td class="cart-col-productname">
//                                 <a href="/#/product/${item.product}">${item.name}</a>
//                             </td>
//                             <td class="cart-col-price">$${item.price}</td>
//                             <td class="cart-col-quantity">${item.qty}</td>
//                             <td class="cart-col-total">$${(item.price * item.qty).toFixed(2)}</td>
                            
//                         </tr>
//                     `).join('')}
//                 </tbody>
//             </table>
//         </form>
//         <div class="row justify-content-end">
//             <div class="col-md-8 col-lg-7 col-xl-6">
//                 <h2 class="h4 summary-title">Order Summary</h2>
//                 <table class="cart_totals">
//                     <tbody>
//                     <tr>
//                     <td>Shipping</td>
//                     <td data-title="Items"><span class="amount"><bdi><span></span>${shipping.address}, ${shipping.city}, ${shipping.postalCode}, ${shipping.country}</bdi></span></td>
//                 </tr>
//                 <tr>
//                 <td>Payment</td>
//                 <td data-title="Items"><span class="amount"><bdi><span></span>Payment Method: ${paymentMethode}</bdi></span></td>
//             </tr>
//                         <tr>
//                             <td>Items</td>
//                             <td data-title="Items"><span class="amount"><bdi><span>$</span>${itemsPrice}</bdi></span></td>
//                         </tr>
//                         <tr>
//                             <td>Tax</td>
//                             <td data-title="Tax"><span class="amount"><bdi><span>$</span>${taxPrice}</bdi></span></td>
//                         </tr>
//                         <tr class="order-total">
//                             <td>Order Total</td>
//                             <td data-title="Total"><strong><span class="amount"><bdi><span>$</span>${totalPrice}</bdi></span></strong></td>
//                         </tr>
//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <td></td>
//                             <td>
//                                 <div class="wc-proceed-to-checkout mb-30">
//                                     <button id="placeorder-button" class="vs-btn rounded-1 shadow-none">Place Order</button>
//                                 </div>
//                             </td>
//                         </tr>
//                     </tfoot>
//                 </table>
//             </div>
//         </div>
//     </div>
// </div>
// </div>

//         `;
//     }
// };

// export default OrderScreen;







const CheckoutSteps = {
    render: (props) => {
        return `
            <div class="checkout-steps">
                <div class="${props.step1 ? 'active' : ''}">Sign In</div>
                <div class="${props.step2 ? 'active' : ''}">Shipping</div>
                <div class="${props.step3 ? 'active' : ''}">Payment</div>
                <div class="${props.step4 ? 'active' : ''}">Place Order</div>
            </div>
        `;
    }
};

const convertCartToOrder = () => {
    const getCartItems = () => {
        const cartItems = localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems')).filter((item) => item !== null && item !== undefined)
            : [];
        return cartItems;
    };

    const orderItems = getCartItems();

    if (orderItems.length === 0) {
        document.location.hash = '/cart';
    }

    const getShipping = () => {
        const shipping = localStorage.getItem('shipping') ?
            JSON.parse(localStorage.getItem('shipping')) :
            {
                address: '',
                city: '',
                postalCode: '',
                phone: '',
                country: '',
            };
        return shipping;
    };

    const shipping = getShipping();

    if (!shipping.address) {
        document.location.hash = '/shipping';
    }

    const getPayment = () => {
                    const payment = localStorage.getItem('payment') ?
                        JSON.parse(localStorage.getItem('payment')) :
                        {
                            paymentMethod: 'Cash',
                        };
                    console.log('Payment from local storage:', payment);
                    return payment;
                };
                
                const paye = getPayment();
                        // Explicitly handle the payment method
        const paymentMethode = paye && paye.paymentMethod ? paye.paymentMethod : 'Cash';

    if (paye.paymentMethod) {
        document.location.hash = '/payment';
    }

    const itemsPrice = orderItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxPrice = Math.round(0.18 * itemsPrice * 100) / 100;
    const totalPrice = itemsPrice + taxPrice;

    return {
        orderItems,
        shipping,
        paye,
        itemsPrice,
        shippingPrice,
        totalPrice,
        paymentMethode,
        taxPrice
    };
};

const OrderScreen = {
    after_render: async () => {
        const createOrder = async (order) => {
            try {
                const getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
                const { token } = getUserInfo;
    
                const response = await fetch('http://localhost:5000/api/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(order),
                });
    
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to create order.');
                }
    
                const responseData = await response.json();
                console.log('Order created successfully:', responseData.data); // Log the data
                return responseData.data;
            } catch (error) {
                console.error('Error creating order:', error.message);
                throw error;
            }
        };
    
        document.getElementById("placeorder-button").addEventListener('click', async () => {
            try {
                const order = convertCartToOrder();
                const data = await createOrder(order);
        
                console.log('API Response Data:', data);
        
                if (data.error) {
                    console.error('Error placing order:', data.error);
                    alert('Failed to place order. Please try again.');
                } else {
                    const cleanCart = () => {
                        localStorage.removeItem('cartItems');
                    };
                    cleanCart();
        
                    // Use properties directly from the data object
                    if (data._id) {
                        document.location.hash = `/order/${data._id}`;
                    } else {
                        console.error('Unexpected data structure. Unable to find order ID.');
                        alert('An unexpected error occurred. Please try again.');
                    }
                }
            } catch (error) {
                console.error('Unexpected error placing order:', error.message);
                alert('An unexpected error occurred. Please try again.');
            }
        });
        
        
    },
    
    render: () => {
        const {
            orderItems,
            shipping,
            paye,
            itemsPrice,
            shippingPrice,
            totalPrice,
            paymentMethode,
            taxPrice
        } = convertCartToOrder();

        return `
            <div>
                ${CheckoutSteps.render({ step1: true, step2: true, step3: true, step4: true })}
                    <div class="vs-cart-wrapper space-md-bottom">
    <div class="container">
        <!-- Other cart content here -->
        <form action="#" class="woocommerce-cart-form">
            <table class="cart_table">
                <thead>
                    <tr>
                        <th class="cart-col-image">Image</th>
                        <th class="cart-col-productname">Product Name</th>
                        <th class="cart-col-price">Price</th>
                        <th class="cart-col-quantity">Quantity</th>
                        <th class="cart-col-total">Total</th>
                
                    </tr>
                </thead>
                <tbody>
                    ${orderItems.map(item => `
                        <tr>
                            <td class="cart-col-image">
                                <img src="http://localhost:5000${item.image}" alt="${item.name}"/>
                            </td>
                            <td class="cart-col-productname">
                                <a href="/#/product/${item.product}">${item.name}</a>
                            </td>
                            <td class="cart-col-price">$${item.price}</td>
                            <td class="cart-col-quantity">${item.qty}</td>
                            <td class="cart-col-total">$${(item.price * item.qty).toFixed(2)}</td>
                            
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </form>
        <div class="row justify-content-end">
            <div class="col-md-8 col-lg-7 col-xl-6">
                <h2 class="h4 summary-title">Order Summary</h2>
                <table class="cart_totals">
                    <tbody>
                    <tr>
                    <td>Shipping</td>
                    <td data-title="Items"><span class="amount"><bdi><span></span>${shipping.address}, ${shipping.city}, ${shipping.postalCode}, ${shipping.phone}, ${shipping.country}</bdi></span></td>
                </tr>
                <tr>
                <td>Payment</td>
                <td data-title="Items"><span class="amount"><bdi><span></span>Payment Method: ${paymentMethode}</bdi></span></td>
            </tr>
                        <tr>
                            <td>Items</td>
                            <td data-title="Items"><span class="amount"><bdi><span>$</span>${itemsPrice}</bdi></span></td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td data-title="Tax"><span class="amount"><bdi><span>$</span>${taxPrice}</bdi></span></td>
                        </tr>
                        <tr class="order-total">
                            <td>Order Total</td>
                            <td data-title="Total"><strong><span class="amount"><bdi><span>$</span>${totalPrice}</bdi></span></strong></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>
                                <div class="wc-proceed-to-checkout mb-30">
                                    <button id="placeorder-button" class="vs-btn rounded-1 shadow-none">Place Order</button>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
</div>

        `;
    }
};

export default OrderScreen;







// const CheckoutSteps = {
//     render: (props) => {
//         return `
//             <div class="checkout-steps">
//                 <div class="${props.step1 ? 'active' : ''}">Sign In</div>
//                 <div class="${props.step2 ? 'active' : ''}">Shipping</div>
//                 <div class="${props.step3 ? 'active' : ''}">Payment</div>
//                 <div class="${props.step4 ? 'active' : ''}">Place Order</div>
//             </div>
//         `;
//     }
// };

// const convertCartToOrder = () => {
//     const getCartItems = () => {
//         const cartItems = localStorage.getItem('cartItems')
//             ? JSON.parse(localStorage.getItem('cartItems')).filter((item) => item !== null && item !== undefined)
//             : [];
//         return cartItems;
//     };

//     const orderItems = getCartItems();

//     if (orderItems.length === 0) {
//         document.location.hash = '/cart';
//     }

//     const getShipping = () => {
//         const shipping = localStorage.getItem('shipping') ?
//             JSON.parse(localStorage.getItem('shipping')) :
//             {
//                 address: '',
//                 city: '',
//                 postalCode: '',
//                 country: '',
//             };
//         return shipping;
//     };

//     const shipping = getShipping();

//     if (!shipping.address) {
//         document.location.hash = '/shipping';
//     }

//     const getPayment = () => {
//                     const payment = localStorage.getItem('payment') ?
//                         JSON.parse(localStorage.getItem('payment')) :
//                         {
//                             paymentMethod: 'Cash',
//                         };
//                     console.log('Payment from local storage:', payment);
//                     return payment;
//                 };
                
//                 const paye = getPayment();
//                         // Explicitly handle the payment method
//         const paymentMethode = paye && paye.paymentMethod ? paye.paymentMethod : 'Cash';

//     if (paye.paymentMethod) {
//         document.location.hash = '/payment';
//     }

//     const itemsPrice = orderItems.reduce((a, c) => a + c.price * c.qty, 0);
//     const shippingPrice = itemsPrice > 100 ? 0 : 10;
//     const taxPrice = Math.round(0.18 * itemsPrice * 100) / 100;
//     const totalPrice = itemsPrice + taxPrice;

//     return {
//         orderItems,
//         shipping,
//         paye,
//         itemsPrice,
//         shippingPrice,
//         totalPrice,
//         paymentMethode,
//         taxPrice
//     };
// };

// const OrderScreen = {
//     after_render: () => {

//     },
//     render: () => {
//         const {
//             orderItems,
//             shipping,
//             paye,
//             itemsPrice,
//             shippingPrice,
//             totalPrice,
//             paymentMethode,
//             taxPrice
//         } = convertCartToOrder();

//         return `
//             <div>
//                 ${CheckoutSteps.render({ step1: true, step2: true, step3: true, step4: true })}

//                 <style>/* Resetting some default styles */
//                 /* Resetting some default styles */
//                 body,
//                 ul,
//                 li {
//                     margin: 0;
//                     padding: 0;
//                     list-style: none;
//                 }
                
//                 .order {
//                     margin: 20px;
//                 }
                
//                 .order-info {
//                     width: 100%;
//                     max-width: 400px;
//                     box-sizing: border-box;
//                     padding: 20px;
//                     border: 1px solid #ddd;
//                     border-radius: 4px;
//                     background-color: #fff;
//                     margin-bottom: 20px; /* Adjust margin-bottom as needed */
//                 }
                
//                 .order-info div {
//                     margin-bottom: 15px;
//                 }
                
//                 .cart-list-container {
//                     box-sizing: border-box;
//                     border: 1px solid #ddd;
//                     padding: 20px;
//                     border-radius: 4px;
//                     background-color: #fff;
//                     margin-bottom: 20px; /* Adjust margin-bottom as needed */
//                     margin-left: 20px;
//                     max-width: 800px;
//                 }
                
//                 .cart-list-container li {
//                     padding: 15px;
//                     border-bottom: 1px solid #ddd;
//                 }
                
//                 .cart-list-container img {
//                     max-width: 50px;
//                     margin-right: 20px;
//                     border-radius: 4px;
//                 }
                
//                 .order-action {
//                     margin-top: 20px;
//                 }
                
//                 .order-action ul {
//                     list-style: none;
//                     padding: 0;
//                 }
                
//                 .order-action li {
//                     margin-bottom: 15px;
//                 }
                
//                 .order-action button {
//                     background-color: #ff9900;
//                     color: #fff;
//                     padding: 15px;
//                     border: none;
//                     border-radius: 4px;
//                     cursor: pointer;
//                     width: 100%;
//                     max-width: 200px;
//                     box-sizing: border-box;
//                     font-size: 16px;
//                 }
                
//                 .order-action button:hover {
//                     background-color: #ffbf00;
//                 }
                
//                 /* Media Query for responsiveness */
//                 @media only screen and (max-width: 768px) {
//                     .order-info,
//                     .cart-list-container,
//                     .order-action button {
//                         width: 100%;
//                         max-width: none;
//                     }
                
//                     .order-info,
//                     .cart-list-container,
//                     .order-action li {
//                         padding: 20px;
//                         margin-bottom: 10px; /* Adjust margin-bottom as needed */
//                     }
//                 }
                

                
//                 </style>
//                 <div class="order">
//                     <div class="order-info">
//                         <div>
//                             <h2>Shipping</h2>
//                             <div>${shipping.address}, ${shipping.city}, ${shipping.postalCode}, ${shipping.country}</div>
//                         </div>
//                         <div>
//                             <h2>Payment</h2>
//                             <div>Payment Method: ${paymentMethode}</div>
//                         </div>
//                     </div>
//                     <div>
//                         <ul class="cart-list-container">
//                             <li>
//                                 <h2>Shopping Cart</h2>
//                                 <div>Price</div>
//                             </li>
//                             ${orderItems.map(item => `
//                                 <li>
//                                     <div class="cart-image">
//                                         <img src="${item.image}" alt="${item.name}"/>
//                                     </div>
//                                     <div class="cart-item">
//                                         <div><a href="/#/product/${item.product}">${item.name}</a></div>
//                                         <div>Qty: ${item.qty}</div>
//                                     </div>
//                                     <div class="cart-price">$${item.price}</div>
//                                 </li>
//                             `)}
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="order-action">

//                 <ul>
//                 <li><h2>order summary</h2></li>
//                 <li><div>Items</div><div>$${itemsPrice}</div></li>
//                 <li><div>Tax</div><div>$${taxPrice}</div></li>
//                 <li><div>Order Total</div><div>$${totalPrice}</div></li>
//                 <li>
//                 <button class = "primary">Place Order</button>
//                 </li>

//                 </ul>
//                 </div>
//             </div>
//         `;
//     }
// };

// export default OrderScreen;
