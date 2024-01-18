

// const CheckoutSteps = {
//     render: (props) => {
//         return `
    

//         <div class="checkout-steps">
//           <div class="${props.step1 ? 'active': ''}">Sign In</div>
//           <div class="${props.step2 ? 'active': ''}">Shipping</div>
//           <div class="${props.step3 ? 'active': ''}">Payment</div>
//           <div class="${props.step4 ? 'active': ''}">Place Order</div>
//         </div>
//         `
//     }
// } ;

// const convertCartToOrder = () =>{

//     const getCartItems = () => {
//         const cartItems = localStorage.getItem('cartItems')
//             ? JSON.parse(localStorage.getItem('cartItems')).filter((item) => item !== null && item !== undefined)
//             : [];
    
//         return cartItems;
//     };
//     const orderItems = getCartItems();
//     if (orderItems.length === 0 ){
//         document.location.hash = '/cart';

//         const getShipping = () => {
//             const shipping = localStorage.getItem('shipping') ?
//                 JSON.parse(localStorage.getItem('shipping')) :
//                 {
//                     address: '',
//                     city: '',
//                     postalCode: '',
//                     country: '',
//                 };
//             return shipping;

//     }

    
//     const shipping = getShipping();
//     if(!shipping.address){

//         document.location.hash = '/shipping';

//     }
//     const getPayment = () => {
//         const payment = localStorage.getItem('payment') ?
//             JSON.parse(localStorage.getItem('payment')) :
//             {
//                 paymentMethod: 'Cash',
              
//             };
//         return payment;
//     }
//   const paye = getPayment();
//   if(!paye.paymentMethod){
//     document.location.hash='/payement';
//   }
//   const itemsPrice = orderItems.reduce((a, c) => a+c.price * c.qty, 0);
//   const shippingPrice = itemsPrice> 100? 0: 10;
//   const taxPrice = Math.round(0.18 * itemsPrice * 100) / 100;
//   const totalPrice = itemsPrice + taxPrice;
//   return {
//     orderItems,
//     shipping,
//     paye,
//     itemsPrice,
//     shippingPrice,
//     totalPrice
//   };
//     };

       

// }


// const PlaceorderScreen = {
//     after_render: () => {

//     },
//     render : ()=>{

//         const  {
//             orderItems,
//             shipping,
//             paye,
//             itemsPrice,
//             shippingPrice,
//             totalPrice
//           } = convertCartToOrder();

//           return `

//           <div>
//           ${CheckoutSteps.render({ step1: true, step2: true, step3: true, step4: true })}
//           <div class="order">

//           <div class="order-info">

//           <div>

//           <h2>Shipping</h2>
//           <div>
          
//           ${shipping.address}, ${shipping.city}, ${shipping.postalCode}, ${shipping.country}
          
//           </div>
          
//           </div>


//           <div>
//           <h2>Payment</h2>

//           <div>Payment Method: ${paye.paymentMethod}</div>
          
//           </div>
          
//           </div>

//           <div>

//           <ul class="cart-list-container">

//           <li> 
//           <h2>Shopping Cart</h2>
//           <div>Price</div>
//           </li>

//           ${
//             orderItems.map(item => `

//             <li>
//             <div class="cart-image">
//             <img src="${item.image}" alt="${item.name}"/>
//             </div>

//             <div class="cart-item">
//             <div>
//             <a href="/#/product/${item.product}"> ${item.name}</a>
//             </div>
//             <div> Qty: ${item.qty}</div>
//             </div>
//             <div class="cart-price">$${item.price}</div>
//             </li>
            
//             `)}
      
//           </ul>
//           </div>
//           </div>

//           <div class="order-action">
//           Order Action
//           </div>
          
//           `

//     }
// };

// export default PlaceorderScreen;



// const PlaceorderScreen = {
//     after_render: () => {
//         // Your after_render logic here
//     },
//     render: () => {
//         const {
//             orderItems,
//             shipping,
//             paye,
//             itemsPrice,
//             shippingPrice,
//             totalPrice
//         } = convertCartToOrder();

//         const CheckoutSteps = {
//             render: (props) => {
//                 return `
//                     <div class="checkout-steps">
//                         <div class="${props.step1 ? 'active' : ''}">Sign In</div>
//                         <div class="${props.step2 ? 'active' : ''}">Shipping</div>
//                         <div class="${props.step3 ? 'active' : ''}">Payment</div>
//                         <div class="${props.step4 ? 'active' : ''}">Place Order</div>
//                     </div>
//                 `;
//             },
//         };

//         return `
//             ${CheckoutSteps.render({ step1: true, step2: true, step3: true, step4: true })}
//             <div class="order">
//                 <div class="order-info">
//                     <div>
//                         <h2>Shipping</h2>
//                         <div>
//                             ${shipping.address}, ${shipping.city}, ${shipping.postalCode}, ${shipping.country}
//                         </div>
//                     </div>
//                     <div>
//                         <h2>Payment</h2>
//                         <div>Payment Method: ${paye.paymentMethod}</div>
//                     </div>
//                 </div>
//                 <div>
//                     <ul class="cart-list-container">
//                         <li> 
//                             <h2>Shopping Cart</h2>
//                             <div>Price</div>
//                         </li>
//                         ${orderItems.map(item => `
//                             <li>
//                                 <div class="cart-image">
//                                     <img src="${item.image}" alt="${item.name}"/>
//                                 </div>
//                                 <div class="cart-item">
//                                     <div>
//                                         <a href="/#/product/${item.product}">${item.name}</a>
//                                     </div>
//                                     <div> Qty: ${item.qty}</div>
//                                 </div>
//                                 <div class="cart-price">$${item.price}</div>
//                             </li>
//                         `)}
//                     </ul>
//                 </div>
//                 <div class="order-action">
//                     <h2>Order Summary</h2>
//                     <div>
//                         <div>Items: $${itemsPrice.toFixed(2)}</div>
//                         <div>Shipping: $${shippingPrice.toFixed(2)}</div>
//                         <div>Tax: $${(itemsPrice * 0.18).toFixed(2)}</div>
//                         <div>Total: $${totalPrice.toFixed(2)}</div>
//                     </div>
//                     <button class="primary" id="place-order-button">Place Order</button>
//                 </div>
//             </div>
//         `;
//     },
// };

// export default PlaceorderScreen;

