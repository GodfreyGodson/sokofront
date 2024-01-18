import { apiUrl } from "./config"
import { getUserInfo } from "./localstorage";

export const getProduct = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
  
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  };

  // export const signin = async ({email, password}) =>{

  //   try{
  //     const response = await fetch({

  //       url: `${apiUrl}/api/users/signin`,
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       data: {
  //         email,
  //         password
  //       },

  //     });

  //     if (!response.ok) {
  //       throw new Error(response.data.message);
  //     }
  //     return response.data;
  

  //   }catch(err){

  //     console.log(err);
  //     return{error: err.response.data.message || err.message};

  //   }

  // }
  


 

export const signin = async ({ email, password }) => {
  try {
    const response = await fetch(`${apiUrl}/api/users/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const data = await response.json(); // Assuming your server returns JSON error messages
      throw new Error(data.message);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
};


export const createOrder = async (order) => {
  try {
    const getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { token } = getUserInfo;

    const response = await fetch(`${apiUrl}/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      // If the response status is not OK, throw an error
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create order.');
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    // Handle errors here, you can log or rethrow the error as needed
    console.error('Error creating order:', error.message);
    throw error; // Rethrow the error to propagate it further if needed
  }
};

export const getOrder = async (id) => {
  const getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
  const { token } = getUserInfo;

  try {
    const response = await fetch(`${apiUrl}/api/orders/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // If the response status is not OK, throw an error
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to get order.');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    // Handle errors here, you can log or rethrow the error as needed
    console.error('Error getting order:', error.message);
    throw error; // Rethrow the error to propagate it further if needed
  }
};




const getOrdersMine = async () => {
  const getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
  const { token } = getUserInfo;

  try {
      const response = await fetch('http://localhost:5000/api/orders/mine', {
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

// Example usage:
try {
  const orders = await getOrdersMine();
  console.log('Orders:', orders);
} catch (error) {
  console.error('Failed to fetch orders:', error.message);
}
