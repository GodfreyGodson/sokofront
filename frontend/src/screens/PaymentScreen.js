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


const PaymentScreen = {
    after_render: () => {
        document.getElementById('payment-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
            localStorage.setItem('payment', JSON.stringify(paymentMethod));
        

            document.location.hash = '/placeorder';
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
        // const getPayment = () => {
        //     const payment = localStorage.getItem('payment') ?
        //         JSON.parse(localStorage.getItem('payment')) :
        //         {
        //             paymentMethod: 'Cash',
                  
        //         };
        //     return payment;
        // }

      

        return `
        ${CheckoutSteps.render({ step1: true, step2: true, step3: true})}
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
    
            #payment-form {
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
        <form action="" id="payment-form">
            <ul class="form-items">
                <li>
                    <h1>Payment</h1>
                </li>
                <li>
                    <div>
                        <input type="radio"
                               name="payment-method"
                               id="cash"
                               value="Cash"
                               checked
                        />
                        <label for="cash">Cash</label>
                    </div>
                </li>
                <li>
                <div>
                <input type="radio"
                       name="payment-method"
                       id="paypal"
                       value="paypal"
                />
                <label for="paypal">PayPal</label>
            </div>
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

export default PaymentScreen;
