// import CheckoutSteps from "./CheckoutSteps";

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


// const ShippingScreen = {
//     after_render: () => {

      
//         document.getElementById('shopping-form').addEventListener('submit', async (e) => {
//             e.preventDefault();

//             const setShipping = () => ({

//                 address = '',
//                 city = '',
//                 postalCode = '',
//                 country = ''
            
//             })=>{
//                 localStorage.setItem('shipping', JSON.stringify({address, city, postalCode, country}));
//             }

//             setShipping({
//                 address: document.getElementById('address').value,
//                 city: document.getElementById('city').value,
//                 postalCode: document.getElementById('postalCode').value,
//                 country: document.getElementById('country').value,
//             });
            
//           document.location.hash = '/payment'
           
            
//         });
//     },

//     render: () => {
//         // Retrieve user information from local storage
//         const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'));
//         const { name } = userInfoFromStorage;
//          if (!name){
//             document.location.hash = '/'
//          }

//         const getShipping = () =>{
//             const shipping = localStorage.getItem('shipping')?
//             JSON.parse(localStorage.getItem('shipping')):
//             {
//                 address:'',
//                 city:'',
//                 postalCode:'',
//                 country:'',
        
//             }
//             return shipping;
        
//         }

//         const { address, city, postalCode, country } = getShipping;
//         return `
        
//         ${CheckoutSteps.render({step1 : true, step2: true})}
//             <div class="form-container">
//             <style>
//             body {
//               margin: 0;
//               padding: 0;
//               font-family: Arial, sans-serif;
//               background-color: #f8f9fa;
//             }
            
//             .form-container {
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               height: 100vh;
//               margin-top: 2rem; /* Adjusted margin-top */
//             }
            
//             #shopping-form {
//               background-color: white;
//               padding: 20px;
//               border-radius: 8px;
//               box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//               width: 400px; /* Adjusted width */
//               max-width: 80%; /* Set maximum width */
//             }
            
//             .form-items {
//               list-style: none;
//               padding: 0;
//               margin: 0;
//             }
            
//             h1 {
//               text-align: center;
//               color: #9ACD32;
//             }
            
//             label {
//               display: block;
//               margin-bottom: 8px;
//               color: #19875;
//             }
            
//             input {
//               width: 100%;
//               padding: 8px;
//               margin-bottom: 16px;
//               box-sizing: border-box;
//               border: 1px solid #ced4da;
//               border-radius: 4px;
//             }
            
//             button {
//               background-color: #9ACD32;
//               color: white;
//               width: 100%; /* Set the width to 100% */
//               padding: 12px; /* Adjust padding as needed */
//               border: none;
//               border-radius: 4px;
//               cursor: pointer;
//             }
            
//             a {
//               color: #28a745;
//               text-decoration: none;
//             }
            
//             a:hover {
//               text-decoration: underline;
//             }
            
//             #password {
//               position: relative;
//             }
            
//             #show-password {
//               position: absolute;
//               right: 10px;
//               top: 50%;
//               transform: translateY(-50%);
//               cursor: pointer;
//             }
//             </style>
//                 <form action="" id="shopping-form">
//                     <ul class="form-items">
//                         <li>
//                             <h1>Shipping</h1>
//                         </li>
//                         <li>
//                             <label for="address">Address</label>
//                             <input type="text" name="address" id="address" value="${address}" />
//                         </li>
//                         <li>
//                         <label for="city">City</label>
//                         <input type="text" name="city" id="city" value="${city}" />
//                     </li>
//                     <li>
//                     <label for="postalCode">Postal Code</label>
//                     <input type="text" name="postalCode" id="postalCode" value="${postalCode}" />
//                 </li>
//                 <li>
//                 <label for="country">Country</label>
//                 <input type="text" name="country" id="country" value="${country}" />
//             </li>
     
             
                 
//                         <li>
//                             <button type="submit" class="primary">Continue</button>
//                         </li>
//                          <br>
                       
//                     </ul>
//                 </form>
//             </div>
//         `;
//     },
// };

// export default ShippingScreen;

const CheckoutSteps = {
    render: (props) => {
        return `
    

        <div class="checkout-steps">
          <div class="${props.step1 ? 'active': ''}">Sign In</div>
          <div class="${props.step2 ? 'active': ''}">Shipping</div>
          <div class="${props.step3 ? 'active': ''}">Payment</div>
          <div class="${props.step4 ? 'active': ''}">Place Order</div>
        </div>
        `
    }
} ;


const ShippingScreen = {
    after_render: () => {
        document.getElementById('shopping-form').addEventListener('submit', async (e) => {
            e.preventDefault();

            // Save shipping information to local storage
            const shippingInfo = {
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                postalCode: document.getElementById('postalCode').value,
                phone: document.getElementById('phone').value,
                country: document.getElementById('country').value,
            };
            localStorage.setItem('shipping', JSON.stringify(shippingInfo));

            document.location.hash = '/payment';
        });
    },

    render: () => {
        // Retrieve user information from local storage
        const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'));
        const { name } = userInfoFromStorage;

        if (!name) {
            document.location.hash = '/';
        }

        // Retrieve shipping information from local storage
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
        }

        const { address, city, postalCode, phone, country } = getShipping(); // Invoke the function

        return `
        ${CheckoutSteps.render({ step1: true, step2: true })}
        <div class="form-container">
        <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #f8f9fa;
        }
        
        .form-container {
          display: flex;
          align-items: start;
          justify-content: center;
          height: 100vh;
          margin-top: 2rem; /* Adjusted margin-top */
        }
        
        #shopping-form {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          width: 400px; /* Adjusted width */
          max-width: 80%; /* Set maximum width */
        }
        
        .form-items {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        h1 {
          text-align: center;
          color: #9ACD32;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          color: #19875;
        }
        
        input {
          width: 100%;
          padding: 8px;
          margin-bottom: 16px;
          box-sizing: border-box;
          border: 1px solid #ced4da;
          border-radius: 4px;
        }
        
        button {
          background-color: #9ACD32;
          color: white;
          width: 100%; /* Set the width to 100% */
          padding: 12px; /* Adjust padding as needed */
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        a {
          color: #28a745;
          text-decoration: none;
        }
        
        a:hover {
          text-decoration: underline;
        }
        
        #password {
          position: relative;
        }
        
        #show-password {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
        </style>
            <form action="" id="shopping-form">
                <ul class="form-items">
                    <li>
                        <h1>Shipping</h1>
                    </li>
                    <li>
                        <label for="address">Address</label>
                        <input type="text" name="address" id="address" value="${address}" />
                    </li>
                    <li>
                        <label for="city">City</label>
                        <input type="text" name="city" id="city" value="${city}" />
                    </li>
                    <li>
                        <label for="postalCode">Postal Code</label>
                        <input type="text" name="postalCode" id="postalCode" value="${postalCode}" />
                    </li>
                    <li>
                    <label for="postalCode">Phone Number</label>
                    <input type="text" name="phone" id="phone" value="${phone}" />
                </li>
                    <li>
                        <label for="country">Country</label>
                        <input type="text" name="country" id="country" value="${country}" />
                    </li>
                    <li>
                        <button type="submit" class="primary">Continue</button>
                    </li>
                </ul>
            </form>
        </div>
        `;
    },
};

export default ShippingScreen;
