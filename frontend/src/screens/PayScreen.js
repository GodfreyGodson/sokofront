



const PayScreen = {
    after_render: async () => {
     
        
    },
    
    render: async() => {
          
        const parseRequestUrl = () => {
            const url = window.location.hash.toLowerCase();
        console.log('Current URL:', url);
        
            const request = url.split("/");
            return {
                resource: request[1],
                id: request[2],
                action: request[3]
            };
        };
        const request = parseRequestUrl();

        const getOrder = async (id) => {
            const getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
            const { token } = getUserInfo;
          
            try {
              const response = await fetch(`http://localhost:5000/api/orders/${id}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              });
          
              console.log('Server Response:', response);
          
              if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to get order.');
              }
          
              const responseData = await response.json();
              return responseData;
            } catch (error) {
              console.error('Error getting order:', error.message);
              throw error;
            }
          };
          
          
        const {
            _id,
            shipping,
            payment,
            orderItems,
            itemsPrice,
           taxPrice,
           totalPrice,
           isDelivered,
           deliveredAt,
           isPaid,
           paidAt
        }= await getOrder(request.id);


        const paymentMethode = payment && payment.paymentMethod ? payment.paymentMethod : 'Cash';
 
        return `
        <div>

        <style>
        .success {
            color: green;
        }
        
        .danger {
            color: red;
        }
        
        </style>
        
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
            <h2 class="h4 summary-title">Order # ${_id}</h2>
            <table class="cart_totals">
                <tbody>
                <tr>
                <td>Shipping</td>
                <td data-title="Items"><span class="amount"><bdi><span></span>${shipping.address}, ${shipping.city}, ${shipping.postalCode}, ${shipping.phone}, ${shipping.country}</bdi></span></td>
            </tr>
            <tr>
    <td>Delivered</td>
    <td data-title="Items">
        <span class="amount">
            <bdi>
                ${isDelivered ? `<div class="success">Delivered at ${deliveredAt}</div>` : '<div class="danger">Not delivered</div>'}
            </bdi>
        </span>
    </td>
</tr>

            
            <tr>
            <td>Payment</td>
            <td data-title="Items"><span class="amount"><bdi><span></span>Payment Method: ${paymentMethode}</bdi></span></td>
        </tr>

        <tr>
        <td>Paid</td>
        <td data-title="Items">
            <span class="amount">
                <bdi>
                    ${isPaid ? `<div class="success">Paid at ${paidAt}</div>` : '<div class="danger">Not paid</div>'}
                </bdi>
            </span>
        </td>
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

export default PayScreen;

// const getOrder = async (id) => {
//     const getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
//     const { token } = getUserInfo;
  
//     try {
//       const response = await fetch(`http://localhost:5000/api/orders/${id}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       console.log('Server Response:', response);
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to get order.');
//       }
  
//       const responseData = await response.json();
//       return responseData;
//     } catch (error) {
//       console.error('Error getting order:', error.message);
//       throw error;
//     }
//   };
  