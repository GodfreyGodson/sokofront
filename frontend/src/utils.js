// export const parseRequestUrl = () => {
//     const url = document.location.hash.toLowerCase();
//     const request = url.split("/");
//     return {
//         resource: request[1],
//         id: request[2],
//         action: request[3]
//     }
// }




export const parseRequestUrl = () => {
    const url = window.location.hash.toLowerCase();
console.log('Current URL:', url);

    const request = url.split("/");
    return {
        resource: request[1],
        id: request[2],
        action: request[3]
    };
};


export const rerender = async(component)=> {
    document.getElementById("main-container").innerHTML = await component.render();
    await component.after_render();
};


export const showLoading = () => {

document.getElementById('loading-overlay').classList.add('active');

};


export const hideLoading = () => {

    document.getElementById('loading-overlay').classList.remove('active');
    
    };


    // export const redirectUser = () => {
    //     if(getCartItems().length!==0){
    //         document.location.hash = '/shipping';
    //     }else {
    //         document.location.hash = '/';
    //     }
    // }



    // Get cart items directly from localStorage
const cartItems = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems')).filter((item) => item !== null && item !== undefined)
: [];


export const redirectUser = () =>{


    // Check if cartItems.length is not equal to 0
if (cartItems.length !== 0) {
    // Redirect to '/shipping'
    document.location.hash = '/shipping';
    } else {
    // Redirect to '/'
    document.location.hash = '/';
    }
    
}


export const getShipping = () =>{
    const shipping = localStorage.getItem('shipping')?
    JSON.parse(localStorage.getItem('shipping')):
    {
        address:'',
        city:'',
        postalCode:'',
        country:'',

    }
    return shipping;

}


export const setShipping = () => ({

    address = '',
    city = '',
    postalCode = '',
    country = ''

})=>{
    localStorage.setItem('shipping', JSON.stringify(address, city, postalCode, country));
}
