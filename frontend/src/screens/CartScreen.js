// import { getCartItems, setCartItems } from "../localstorage";
// import { parseRequestUrl } from "../utils";
// import { getProduct } from "./ProductScreen";





// const addToCart = (item, forceUpdate = false)=>{

//     let cartItems = getCartItems();
//     const existItem = cartItems.find(x => x.product === item.product);
//     if (existItem){
//         cartItems = cartItems.map((x) =>
//          x.product === existItem.product? item:x
//          );
//     }else {
//         cartItems = [...cartItems, item];
//     }
//     setCartItems(cartItems);

// };
// const CartScreen = {
//     after_render:() => {

//     },
//     render: async() => {

//         const request = parseRequestUrl();

//         if (request.id) {
//             const product = await getProduct(request.id);
//             addToCart({
//                 product: product._id,
//                 name: product.name,
//                 image:product.image,
//                 price:product.price,
//                 countInStock:product.countInStock,
//                 qty:1
//             })
//         }

//         return `<div>Cart Screen</div>
//         <div>${getCartItems().length}</div>
//         `;

//     }
// };

// export default CartScreen;

// good version

// import { getCartItems, setCartItems } from "../localstorage.js";
// import { parseRequestUrl } from "../utils.js";
// import { getProduct } from "./ProductScreen.js";

// const addToCart = (item, forceUpdate = false) => {
//     let cartItems = getCartItems();
//     const existItem = cartItems.find((x) => x.product === item.product);
//     if (existItem) {
//         cartItems = cartItems.map((x) => (x.product === existItem.product ? item : x));
//     } else {
//         cartItems = [...cartItems, item];
//     }
//     setCartItems(cartItems);
// };

// const CartScreen = {
//     after_render: () => {
//         // Your after_render logic here
//     },
//     render: async () => {
//         const request = parseRequestUrl();

//         if (request.id) {
//             const product = await getProduct(request.id);
//             addToCart({
//                 product: product._id,
//                 name: product.name,
//                 image: product.image,
//                 price: product.price,
//                 countInStock: product.countInStock,
//                 qty: 1,
//             });
//         }

//         return `
//             <div>Cart Screen</div>
//             <div>${getCartItems().length}</div>
//         `;
//     },
// };

// export default CartScreen;





// import { getCartItems, setCartItems } from "../localstorage.js";
// import { parseRequestUrl } from "../utils.js";
// import { getProduct } from "./ProductScreen.js";

// const addToCart = (item, forceUpdate = false) => {
//     let cartItems = getCartItems();
//     const existItem = cartItems.find((x) => x.product === item.product);
//     if (existItem) {
//         cartItems = cartItems.map((x) => (x.product === existItem.product ? item : x));
//     } else {
//         cartItems = [...cartItems, item];
//     }
//     setCartItems(cartItems);
// };

// const CartScreen = {
//     after_render: () => {
//         // Your after_render logic here
//     },
//     render: async () => {
//         const request = parseRequestUrl();

//         if (request.id) {
//             const product = await getProduct(request.id);
//             addToCart({
//                 product: product._id,
//                 name: product.name,
//                 image: product.image,
//                 price: product.price,
//                 countInStock: product.countInStock,
//                 qty: 1,
//             });
//         }

//         const cartItems = getCartItems();

//         if (cartItems.length === 0) {
//             return `<div>Cart is empty</div>`;
//         }

//         // Dynamically generate the cart items HTML
//         const cartItemsHTML = cartItems
//             .map(
//                 (item) => `
//                     <tr class="cart_item">
//                         <td data-title="Product">
//                             <a class="cart-productimage" href="#"><img width="91" height="91" src="${item.image}" alt="Image"></a>
//                         </td>
//                         <td data-title="Name">
//                             <a class="cart-productname" href="#">${item.name}</a>
//                         </td>
//                         <td data-title="Price">
//                             <span class="amount"><bdi><span>$</span>${item.price}</bdi></span>
//                         </td>
//                         <td data-title="Quantity">
//                             <div class="quantity">
//                                 <button class="quantity-minus qut-btn"><i class="far fa-minus"></i></button>
//                                 <input type="number" class="qty-input" value="${item.qty}" min="1" max="99">
//                                 <button class="quantity-plus qut-btn"><i class="far fa-plus"></i></button>
//                             </div>
//                         </td>
//                         <td data-title="Total">
//                             <span class="amount"><bdi><span>$</span>${item.price * item.qty}</bdi></span>
//                         </td>
//                         <td data-title="Remove">
//                             <a href="#" class="remove"><i class="fal fa-trash-alt"></i></a>
//                         </td>
//                     </tr>
//                 `
//             )
//             .join("");

//         return `
//             <div class="breadcumb-wrapper breadcumb-layout1 bg-fluid pt-200 pb-200" data-bg-src="assets/img/breadcumb/breadcumb-img-1.jpg">
//                 <div class="container">
//                     <div class="breadcumb-content text-center">
//                         <h1 class="breadcumb-title">Cart</h1>
//                         <ul class="breadcumb-menu-style1 mx-auto">
//                             <li><a href="index.html">Home</a></li>
//                             <li class="active">Cart</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div class="vs-cart-wrapper space-top space-md-bottom">
//                 <div class="container">
//                     <!-- Other cart content here -->
//                     <form action="#" class="woocommerce-cart-form">
//                         <table class="cart_table">
//                             <thead>
//                                 <tr>
//                                     <th class="cart-col-image">Image</th>
//                                     <th class="cart-col-productname">Product Name</th>
//                                     <th class="cart-col-price">Price</th>
//                                     <th class="cart-col-quantity">Quantity</th>
//                                     <th class="cart-col-total">Total</th>
//                                     <th class="cart-col-remove">Remove</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 ${cartItemsHTML}
//                             </tbody>
//                         </table>
//                     </form>
//                     <!-- Other cart content here -->
//                 </div>
//             </div>
//         `;
//     },
// };

// export default CartScreen;




// mainnnnnn



import { getCartItems, setCartItems } from "../localstorage.js";
import { parseRequestUrl, rerender } from "../utils.js";
import { getProduct } from "./ProductScreen.js";

const addToCart = (item, forceUpdate = false) => {
    let cartItems = getCartItems();
    const existItem = cartItems.find((x) => x.product === item.product);
    if (existItem) {
        if(forceUpdate){
            cartItems = cartItems.map((x) => (x.product === existItem.product ? item : x));
        }
       
    } else {
        cartItems = [...cartItems, item];
    }
    setCartItems(cartItems);
    if(forceUpdate){
      rerender(CartScreen);
    }
   
};

// const removeFromCart = (id) => {
//     setCartItems(getCartItems().filter((x) => x.product !== id));
//     if(id=== parseRequestUrl().id){
//         window.location.hash = '/cart';

//     }else{
//         rerender(CartScreen);
//     }
    
// }
const removeFromCart = (id, event) => {
    // Prevent the default behavior of the link or button
    event.preventDefault();

    // Retrieve the current product id from the URL
    const currentProductId = parseRequestUrl().id;

    // Filter out the item with the specified product id from the cart items
    const updatedCartItems = getCartItems().filter((x) => x.product !== id);

    // Update the cart items in local storage
    setCartItems(updatedCartItems);

    if (id === currentProductId) {
        // If the removed item is the currently viewed item, update the hash
        document.location.hash = '/cart';
    } else {
        // If the removed item is not the currently viewed item, rerender the cart screen
        rerender(CartScreen);
    }
};


// const removeFromCart = (id, event) => {
//     // Prevent the default behavior of the link or button
//     event.preventDefault();

//     setCartItems(getCartItems().filter((x) => x.product !== id));
    
//     if (id === parseRequestUrl().id) {
//         // If the removed item is the currently viewed item, update the hash
//         document.location.hash = '/cart';
//     } else {
//         // If the removed item is not the currently viewed item, rerender the cart screen
//         rerender(CartScreen);
//     }
// }





const CartScreen = {
    after_render:async () => {
        // Your after_render logic here
     const qtySelects =  document.getElementsByClassName("qty-select");
     Array.from(qtySelects).forEach( qtySelect => {
        qtySelect.addEventListener('change', (e) => {
            const item = getCartItems().find(x => x.product === qtySelect.id);
            addToCart({...item, qty: Number(e.target.value)}, true)
        });
     });
     const deleteButtons = document.getElementsByClassName("remove");
Array.from(deleteButtons).forEach(deleteButton => {
    deleteButton.addEventListener('click', (e) => {
        removeFromCart(deleteButton.id, e);
    });
});

    //  const deleteButtons = document.getElementsByClassName("remove");
    //  Array.from(deleteButtons).forEach(deleteButton=>{
    //     deleteButton.addEventListener('click', ()=>{
    //         removeFromCart(deleteButton.id);
    //     });
    //  })

    document.getElementById("checkout-button").addEventListener("click", ()=>{
        document.location.hash = '/signin';
    })
    },
    render: async () => {
        const request = parseRequestUrl();
    
        if (request.id) {
            try {
                const product = await getProduct(request.id);
                console.log('Product:', product);
    
                if (product && product._id && product.name && product.image && product.price && product.countInStock) {
                    addToCart({
                        product: product._id,
                        name: product.name,
                        image: product.image,
                        price: product.price,
                        countInStock: product.countInStock,
                        qty: 1,
                    });
                } else {
                    console.error('Invalid product data:', product);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }
    
        const cartItems = getCartItems();
    
        if (cartItems.length === 0) {
            return `<div>Cart is empty</div>`;
        }
      // Calculate the cart subtotal using reduce
      const cartSubtotal = cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.price);
        const itemQty = parseInt(item.qty);

        // Check if price and qty are valid numbers
        if (!isNaN(itemPrice) && !isNaN(itemQty)) {
            return total + itemPrice * itemQty;
        } else {
            console.error('Invalid price or qty for item:', item);
            return total;
        }
    }, 0);

    // Check if cartSubtotal is a valid number
    if (isNaN(cartSubtotal)) {
        console.error('Invalid cartSubtotal:', cartSubtotal);
        return `<div>Error: Invalid cart subtotal</div>`;
    }

    // Calculate cartTotal and orderTotal
    const cartTotal = cartSubtotal;  // You can add other calculations for taxes, shipping, etc. if needed
    const orderTotal = cartTotal;
    
        // Dynamically generate the cart items HTML
        const cartItemsHTML = cartItems
            .map((item) => {
                // Check if necessary data is available before rendering
                if (item.name && item.image && item.price !== undefined && item.qty !== undefined) {
                    return `
                        <tr class="cart_item">
                            <td data-title="Product">
                                <a class="cart-productimage" href="#"><img width="91" height="91" src="http://localhost:5000${item.image}" alt="Image"></a>
                            </td>
                            <td data-title="Name">
                                <a class="cart-productname" href="#">${item.name}</a>
                            </td>
                            <td data-title="Price">
                                <span class="amount"><bdi><span>$</span>${item.price}</bdi></span>
                            </td>
                            <td data-title="Quantity">
                                <div class="quantity">
                                    <select class="qty-select" id="${item.product}">
                                        ${
                                            [...Array(item.countInStock).keys()].map((x) =>
                                                item.qty === x + 1
                                                    ? `<option selected value="${x + 1}">${x + 1}</option>`
                                                    : `<option value="${x + 1}">${x + 1}</option>`
                                            )
                                        }
                                    </select>
                                </div>
                            </td>
                            <td data-title="Total">
                                <span class="amount"><bdi><span>$</span>${item.price * item.qty}</bdi></span>
                            </td>
                            <td data-title="Remove">
                                <button class="remove" id="${item.product}"><i class="fal fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    `;
                } else {
                    // Handle the case where necessary data is not available
                    return '';
                }
            })
            .join('');
        return `
            <div class="breadcumb-wrapper breadcumb-layout1 bg-fluid pt-200 pb-200" data-bg-src="assets/img/breadcumb/breadcumb-img-1.jpg">
            <div class="container">
                     <div class="breadcumb-content text-center">
                        <h1 class="breadcumb-title">Cart</h1>
                         <ul class="breadcumb-menu-style1 mx-auto">
                                         <li><a href="index.html">Home</a></li>
                                         <li class="active">Cart</li>
                                    </ul>
                                </div>
                        </div>
            </div>
            <div class="vs-cart-wrapper space-top space-md-bottom">
                <div class="container">
                    <!-- Other cart content here -->
                    <form action="#" class="woocommerce-cart-form">
                        <table class="cart_table">
                            <thead>
                                <tr>
                                <tr>
                                                                     <th class="cart-col-image">Image</th>
                                                                     <th class="cart-col-productname">Product Name</th>
                                                                     <th class="cart-col-price">Price</th>
                                                                     <th class="cart-col-quantity">Quantity</th>
                                                                     <th class="cart-col-total">Total</th>
                                                                     <th class="cart-col-remove">Remove</th>
                                                                 </tr>
                                </tr>
                            </thead>
                            <tbody>
                                ${cartItemsHTML}
                            </tbody>
                        </table>
                    </form>
                    <div class="row justify-content-end">
                        <div class="col-md-8 col-lg-7 col-xl-6">
                            <h2 class="h4 summary-title">Cart Totals</h2>
                            <table class="cart_totals">
                            <tbody>
                                <tr>
                                    <td>Cart Subtotal</td>
                                    <td data-title="Cart Subtotal"><span class="amount"><bdi><span>$</span>${cartSubtotal.toFixed(2)}</bdi></span></td>
                                </tr>
                                <!-- Other rows for shipping, handling, etc. -->
                            </tbody>
                            <tfoot>
                                <tr class="order-total">
                                    <td>Order Total</td>
                                    <td data-title="Total"><strong><span class="amount"><bdi><span>$</span>${orderTotal.toFixed(2)}</bdi></span></strong></td>
                                </tr>
                            </tfoot>
                        </table>
                            <div class="wc-proceed-to-checkout mb-30"><button id="checkout-button" class="vs-btn rounded-1 shadow-none">Proceed to checkout</button></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
};

export default CartScreen;


// endmainnnnn
  // <button class="quantity-minus qut-btn"><i class="far fa-minus"></i></button>
   // <input type="number" class="qty-input" value="${item.qty}" min="1" max="99">
//    <button class="quantity-plus qut-btn"><i class="far fa-plus"></i></button>









// import { getCartItems, setCartItems } from "../localstorage.js";
// import { parseRequestUrl, rerender } from "../utils.js";
// import { getProduct } from "./ProductScreen.js";

// const addToCart = (item, forceUpdate = false) => {
//     let cartItems = getCartItems();
//     const existItem = cartItems.find((x) => x.product === item.product);
//     if (existItem) {
//         if(forceUpdate){
//             cartItems = cartItems.map((x) => (x.product === existItem.product ? item : x));
//         }
       
//     } else {
//         cartItems = [...cartItems, item];
//     }
//     setCartItems(cartItems);
//     if(forceUpdate){
//       rerender(CartScreen);
//     }
   
// };

// const removeFromCart = (id) => {
//     setCartItems(getCartItems().filter((x) => x.product !== id));
//     if(id=== parseRequestUrl().id){
//         window.location.hash = '/#/cart';

//     }else{
//         rerender(CartScreen);
//     }
    
// }


// const CartScreen = {
//     after_render:async () => {
//         // Your after_render logic here
//      const qtySelects =  document.getElementsByClassName("qty-select");
//      Array.from(qtySelects).forEach( qtySelect => {
//         qtySelect.addEventListener('change', (e) => {
//             const item = getCartItems().find(x => x.product === qtySelect.id);
//             addToCart({...item, qty: Number(e.target.value)}, true)
//         });
//      });
//      const deleteButtons = document.getElementsByClassName("remove");
//      Array.from(deleteButtons).forEach(deleteButton=>{
//         deleteButton.addEventListener('click', ()=>{
//             removeFromCart(deleteButton.id);
//         });
//      })
//     },
//     render: async () => {
//         const request = parseRequestUrl();
    
//         if (request.id) {
//             try {
//                 const product = await getProduct(request.id);
//                 console.log('Product:', product);
    
//                 if (product && product._id) {
//                     addToCart({
//                         product: product._id,
//                         name: product.name,
//                         image: product.image,
//                         price: product.price,
//                         countInStock: product.countInStock,
//                         qty: 1,
//                     });
//                 } else {
//                     console.error('Invalid product data:', product);
//                 }
//             } catch (error) {
//                 console.error('Error fetching product:', error);
//             }
//         }
    

//         const cartItems = getCartItems();

//         if (cartItems.length === 0) {
//             return `<div>Cart is empty</div>`;
//         }

//         // Calculate the cart subtotal using reduce
//         const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

//         // Dynamically generate the cart items HTML
//         const cartItemsHTML = cartItems
//             .map(
//                 (item) => `
//                 <tr class="cart_item">
//                 <td data-title="Product">
//                     <a class="cart-productimage" href="#"><img width="91" height="91" src="${item.image}" alt="Image"></a>
//                 </td>
//                 <td data-title="Name">
//                     <a class="cart-productname" href="#">${item.name}</a>
//                 </td>
//                 <td data-title="Price">
//                     <span class="amount"><bdi><span>$</span>${item.price}</bdi></span>
//                 </td>
//                 <td data-title="Quantity">
//                     <div class="quantity">
                      
                     
//                         <select class =" qty-select" id="${item.product}">
//                         ${
//                             [...Array(item.countInStock).keys()].map(x=>
//                                 item.qty=== x+1
//                                 ? `<option selected value="${x+1}">${x+1}</option>`
//                                : `<option value="${x+1}">${x+1}</option>`
//                                 )
//                         }
//                         </select>
                       
//                     </div>
//                 </td>
//                 <td data-title="Total">
//                     <span class="amount"><bdi><span>$</span>${item.price * item.qty}</bdi></span>
//                 </td>
//                 <td data-title="Remove">
//                     <button  class="remove" id="${item.product}"><i class="fal fa-trash-alt"></i></button>
//                 </td>
//             </tr>
//                 `
//             )
//             .join("");

//         return `
//             <div class="breadcumb-wrapper breadcumb-layout1 bg-fluid pt-200 pb-200" data-bg-src="assets/img/breadcumb/breadcumb-img-1.jpg">
//             <div class="container">
//                      <div class="breadcumb-content text-center">
//                         <h1 class="breadcumb-title">Cart</h1>
//                          <ul class="breadcumb-menu-style1 mx-auto">
//                                          <li><a href="index.html">Home</a></li>
//                                          <li class="active">Cart</li>
//                                     </ul>
//                                 </div>
//                         </div>
//             </div>
//             <div class="vs-cart-wrapper space-top space-md-bottom">
//                 <div class="container">
//                     <!-- Other cart content here -->
//                     <form action="#" class="woocommerce-cart-form">
//                         <table class="cart_table">
//                             <thead>
//                                 <tr>
//                                 <tr>
//                                                                      <th class="cart-col-image">Image</th>
//                                                                      <th class="cart-col-productname">Product Name</th>
//                                                                      <th class="cart-col-price">Price</th>
//                                                                      <th class="cart-col-quantity">Quantity</th>
//                                                                      <th class="cart-col-total">Total</th>
//                                                                      <th class="cart-col-remove">Remove</th>
//                                                                  </tr>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 ${cartItemsHTML}
//                             </tbody>
//                         </table>
//                     </form>
//                     <div class="row justify-content-end">
//                         <div class="col-md-8 col-lg-7 col-xl-6">
//                             <h2 class="h4 summary-title">Cart Totals</h2>
//                             <table class="cart_totals">
//                                 <tbody>
//                                     <tr>
//                                         <td>Cart Subtotal</td>
//                                         <td data-title="Cart Subtotal"><span class="amount"><bdi><span>$</span>${cartSubtotal.toFixed(2)}</bdi></span>
//                                         </td>
//                                     </tr>
//                                     <!-- Other rows for shipping, handling, etc. -->
//                                 </tbody>
//                                 <tfoot>
//                                     <tr class="order-total">
//                                         <td>Order Total</td>
//                                         <td data-title="Total"><strong><span class="amount"><bdi><span>$</span>${cartSubtotal.toFixed(2)}</bdi></span></strong></td>
//                                     </tr>
//                                 </tfoot>
//                             </table>
//                             <div class="wc-proceed-to-checkout mb-30"><button id="checkout-button" class="vs-btn rounded-1 shadow-none">Proceed to checkout</button></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//     },
// };

// export default CartScreen;