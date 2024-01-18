

const ProfileScreen = {
    after_render: () => {
        document.getElementById('signout-button').addEventListener('click', () => {
            // Call the signOut function when the "Sign-Out" button is clicked
            signOut();
        });
        document.getElementById('profile-form').addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Retrieve user information from local storage
            const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'));
            const { _id, token } = userInfoFromStorage;

            try {
                // Make a PUT request to update the user profile
                const response = await fetch(`http://localhost:5000/api/users/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
                });

                if (!response.ok) {
                    // If the update fails, throw an error with the error message from the server
                    const errorMessage = await response.text();
                    throw new Error(errorMessage);
                }

                // Assuming the server response includes updated user information
                const updatedUserInfo = await response.json();

                // Save updated user information to local storage
                localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));

                // Redirect the user to '/' upon successful update
                window.location.href = '/';
            } catch (error) {
                console.error(error);
                // Display an error message to the user
                alert(`Update failed. Error: ${error.message}`);
            }
        });
    },

    render: async() => {
        // Retrieve user information from local storage
        const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'));
        const { name, email, password, token, id } = userInfoFromStorage;


 // Fetch orders
 const getOrdersMine = async () => {
  try {
      const response = await fetch(`http://localhost:5000/api/orders/all`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
          },
      });

      console.log('Server Response:', response);

      if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || 'Failed to get orders.');
      }

      const responseData = await response.json();
      return responseData;
  } catch (error) {
      console.error('Error getting orders:', error.message);
      throw error;
  }
};

  const orders = await getOrdersMine();
  console.log('Orders:', orders);



        return `

        <div class="content profile">

       
    <div class="profile-info">
    
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
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    
    #profile-form {
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

    .content {
      display: flex;
      align-items: start;
      justify-content: center;
      height: 100vh;
      margin-top: 2rem; /* Adjusted margin-top */
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

    .profile{
      display:flex;
      flex:wrap;
     
      justify-content:space-between;
      margin-left:1rem;
      align-items: flex-start;

    }

    .profile-info{
      flex:1 1 20rem;
    }
    .profile-orders{
      flex:3 1 60rem;

      align-items:start;
    }

    .table{
      width:100%;
    }
    th{
      text-allign:left;
    }
    tbody > tr:nth-child(odd){

      background-color:#f0f0f0;

    }
    td{
      padding:0.5rem;
    }
    </style>
        <form action="" id="profile-form">
            <ul class="form-items">
                <li>
                    <h1>User Profile</h1>
                </li>
                <li>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" value="${name}" />
                </li>
                <li>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" value="${email}"  />
                </li>
                <li>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" value="${password}"  />
                    <input type="checkbox" id="show-password">
                </li>
                <li>
                    <button type="submit" class="primary">Update</button>
                </li>
                 <br>
                <li>
                <button type="button" class="primary" id="signout-button">Sign-Out</button>
            </li>
            </ul>
        </form>
    </div>
    
    
    </div>

    <div class="profile-orders">

  
        <h2>Order History</h2>
        <table>

            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Delivered</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                ${orders.length === 0 ? `<tr><td colspan="6">No Order Found</td></tr>` :
                    orders.map(order => `<tr>
                        <td>${order._id}</td>
                        <td>${order.createdAt}</td>
                        <td>${order.totalPrice}</td>
                        <td>${order.paidAt || 'NO'}</td>
                        <td>${order.deliveredAt || 'NO'}</td>
                        <td><a href="/#/order/${order._id}">Details</a></td>
                    </tr>`
                    ).join('\n')
                }
            </tbody>

        </table>
    </div>
</div>

         
        `;
    },
};

export default ProfileScreen;


// // Function to handle sign-out
// const signOut = () => {
//     // Remove userInfo from local storage
//     localStorage.removeItem('userInfo');

//     // Redirect to '/'
//     window.location.href = '/';
// };







// const ProfileScreen = {
//   after_render: () => {

//       document.getElementById('signout-button').addEventListener('click', () => {
//           // Call the signOut function when the "Sign-Out" button is clicked
//           signOut();
//       });
//       document.getElementById('profile-form').addEventListener('submit', async (e) => {
//           e.preventDefault();

//           const name = document.getElementById('name').value;
//           const email = document.getElementById('email').value;
//           const password = document.getElementById('password').value;

//           // Retrieve user information from local storage
//           const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'));
//           const { _id, token } = userInfoFromStorage;

//           try {
//               // Make a PUT request to update the user profile
//               const response = await fetch(`http://localhost:5000/api/users/${_id}`, {
//                   method: 'PUT',
//                   headers: {
//                       'Content-Type': 'application/json',
//                       Authorization: `Bearer ${token}`,
//                   },
//                   body: JSON.stringify({
//                       name,
//                       email,
//                       password,
//                   }),
//               });

//               if (!response.ok) {
//                   // If the update fails, throw an error with the error message from the server
//                   const errorMessage = await response.text();
//                   throw new Error(errorMessage);
//               }

//               // Assuming the server response includes updated user information
//               const updatedUserInfo = await response.json();

//               // Save updated user information to local storage
//               localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));

//               // Redirect the user to '/' upon successful update
//               window.location.href = '/';
//           } catch (error) {
//               console.error(error);
//               // Display an error message to the user
//               alert(`Update failed. Error: ${error.message}`);
//           }
//       });
//   },

//   render: async() => {
//       // Retrieve user information from local storage
//       const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'));
//       const { name, email, password, token, id } = userInfoFromStorage;


// // Fetch orders
// const getOrdersMine = async () => {
// try {
//     const response = await fetch(`http://localhost:5000/api/orders/all`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//         },
//     });

//     console.log('Server Response:', response);

//     if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(errorText || 'Failed to get orders.');
//     }

//     const responseData = await response.json();
//     return responseData;
// } catch (error) {
//     console.error('Error getting orders:', error.message);
//     throw error;
// }
// };

// const orders = await getOrdersMine();
// console.log('Orders:', orders);



//       return `

//       <div class="content profile">

     
//   <div class="profile-info">
  
//   <div class="form-container">
//   <style>
//   body {
//     margin: 0;
//     padding: 0;
//     font-family: Arial, sans-serif;
//     background-color: #f8f9fa;
//   }
  
//   .form-container {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
//   }
  
//   #profile-form {
//     background-color: white;
//     padding: 20px;
//     border-radius: 8px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     width: 400px; /* Adjusted width */
//     max-width: 80%; /* Set maximum width */
//   }
  
//   .form-items {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }
  
//   h1 {
//     text-align: center;
//     color: #9ACD32;
//   }


  
//   label {
//     display: block;
//     margin-bottom: 8px;
//     color: #19875;
//   }
  
//   input {
//     width: 100%;
//     padding: 8px;
//     margin-bottom: 16px;
//     box-sizing: border-box;
//     border: 1px solid #ced4da;
//     border-radius: 4px;
//   }
  
//   button {
//     background-color: #9ACD32;
//     color: white;
//     width: 100%; /* Set the width to 100% */
//     padding: 12px; /* Adjust padding as needed */
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//   }

//   .content {
//     display: flex;
//     align-items: start;
//     justify-content: center;
//     height: 100vh;
//     margin-top: 2rem; /* Adjusted margin-top */
//   }
  
  
//   a {
//     color: #28a745;
//     text-decoration: none;
//   }
  
//   a:hover {
//     text-decoration: underline;
//   }
  
//   #password {
//     position: relative;
//   }
  
//   #show-password {
//     position: absolute;
//     right: 10px;
//     top: 50%;
//     transform: translateY(-50%);
//     cursor: pointer;
//   }

//   .profile-orders {
//     text-align: center;
//     margin-top: 20px; /* Adjust the margin as needed */
// }

// .order-history-table {
//     width: 100%;
//     max-width: 600px; /* Adjust the max-width as needed */
//     margin: 0 auto;
//     border-collapse: collapse;
//     table-layout: fixed; /* Set a fixed layout for the table */
// }

// .order-history-table th,
// .order-history-table td {
//     padding: 8px; /* Decrease the padding for a smaller height */
//     border: 1px solid #ddd;
//     white-space: nowrap; /* Prevent text from wrapping in cells */
//     overflow: hidden;
//     text-overflow: ellipsis; /* Show ellipsis for overflowing text */
// }

// .order-history-table th {
//     background-color: #f2f2f2;
// }

// .order-history-table tbody tr:nth-child(even) {
//     background-color: #f9f9f9;
// }

// /* Responsive Styles */
// @media screen and (max-width: 600px) {
//     .order-history-table {
//         font-size: 12px; /* Adjust the font size for smaller screens */
//     }
// }

//   </style>
//       <form action="" id="profile-form">
//           <ul class="form-items">
//               <li>
//                   <h1>User Profile</h1>
//               </li>
//               <li>
//                   <label for="name">Name</label>
//                   <input type="text" name="name" id="name" value="${name}" />
//               </li>
//               <li>
//                   <label for="email">Email</label>
//                   <input type="email" name="email" id="email" value="${email}"  />
//               </li>
//               <li>
//                   <label for="password">Password</label>
//                   <input type="password" name="password" id="password" value="${password}"  />
//                   <input type="checkbox" id="show-password">
//               </li>
//               <li>
//                   <button type="submit" class="primary">Update</button>
//               </li>
//                <br>
//               <li>
//               <button type="button" class="primary" id="signout-button">Sign-Out</button>
//           </li>
//           </ul>
//       </form>
//   </div>
  
  
//   </div>

//   <div class="profile-orders">


//   <h2>Order History</h2>
//   <form action="#" class="order-history-form">
//       <table class="order-history-table">
//           <thead>
//               <tr>
//                   <th class="order-col-id">Order Id</th>
//                   <th class="order-col-date">Date</th>
//                   <th class="order-col-total">Total</th>
//                   <th class="order-col-paid">Paid</th>
//                   <th class="order-col-delivered">Delivered</th>
//                   <th class="order-col-actions">Actions</th>
//               </tr>
//           </thead>
//           <tbody>
//               ${orders.length === 0 ? `<tr><td colspan="6">No Order Found</td></tr>` :
//                   orders.map(order => `<tr>
//                       <td>${order._id}</td>
//                       <td>${order.createdAt}</td>
//                       <td>${order.totalPrice}</td>
//                       <td>${order.paidAt || 'NO'}</td>
//                       <td>${order.deliveredAt || 'NO'}</td>
//                       <td><a href="/#/order/${order._id}">Details</a></td>
//                   </tr>`
//                   ).join('\n')
//               }
//           </tbody>
//       </table>
//   </form>
  
//   </div>
// </div>

       
//       `;
//   },
// };

// export default ProfileScreen;


// Function to handle sign-out
const signOut = () => {
  // Remove userInfo from local storage
  localStorage.removeItem('userInfo');

  // Redirect to '/'
  window.location.href = '/';
};