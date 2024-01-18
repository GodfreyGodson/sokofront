// export const getCartItems = () =>{
//     const cartItems = localStorage.getItem('cartItems')
//     ?JSON.parse(localStorage.getItem('cartItems'))
//     :[];

//     return cartItems;

// };


// export const setCartItems = (cartItems) =>{

//     localStorage.setItem('cartItems', JSON.stringify(cartItems))

// };


// export const getCartItems = () => {
//     const cartItems = localStorage.getItem('cartItems')
//         ? JSON.parse(localStorage.getItem('cartItems'))
//         : [];

//     return cartItems;
// };

// export const setCartItems = (cartItems) => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// };



// localstorage.js

export const getCartItems = () => {
    const cartItems = localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems')).filter((item) => item !== null && item !== undefined)
        : [];

    return cartItems;
};

export const setCartItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};


export const setUserInfo = ({
    _id = '',
    name = '',
    email = '',
    password = '',
    token = '',
    isAdmin = false,
  }) => {
    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        _id,
        name,
        email,
        password,
        token,
        isAdmin,
      })
    );
  };
  
  export const getUserInfo = () => {
    const userInfoString = localStorage.getItem('userInfo');
    return userInfoString ? JSON.parse(userInfoString) : { name: '', email: '', password: '' };
  };
  

  export const cleanCart = () => {
    localStorage.removeItem('cartItems')
  }