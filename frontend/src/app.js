
// first virsion


// import Error404Screen from "./screens/Error404Screen.js";
// import HomeScreen from "./screens/HomeScreen.js";
// import ProductScreen from "./screens/ProductScreen.js";
// import { parseRequestUrl } from "./utils.js";

// const routes = {
//     "/":HomeScreen,
//     "/product/:id":ProductScreen
// }

// const router = () => {
//     const request = parseRequestUrl();
//     const parseUrl = (request.resource ? `/${request.resource}` : '/') + 
//     (request.id? '/:id': '') +
//     (request.verb? `/${request.verb}`: '');
//     const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;
//     const section = document.getElementById("main-container");
//     // section.innerHTML = HomeScreen.render();

//     section.innerHTML = screen.render();

   
// };

// window.addEventListener('load', router);
// window.addEventListener('hashchange', router);


// 2nd version

// import Error404Screen from "./screens/Error404Screen.js";
// import HomeScreen from "./screens/HomeScreen.js";
// import ProductScreen from "./screens/ProductScreen.js";
// import { parseRequestUrl } from "./utils.js";

// const routes = {
//     "/":HomeScreen,
//     "/product/:id":ProductScreen
// }

// const router = async() => {
//     const request = parseRequestUrl();
//     const parseUrl = (request.resource ? `/${request.resource}` : '/') + 
//     (request.id? '/:id': '') +
//     (request.verb? `/${request.verb}`: '');
//     const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;
//     const section = document.getElementById("main-container");
//     // section.innerHTML = HomeScreen.render();

//     section.innerHTML = await screen.render();

   
// };


// window.addEventListener('load', router);
// window.addEventListener('hashchange', router);


// 3rd version
// import CartScreen from "./screens/CartScreen.js";
// import Error404Screen from "./screens/Error404Screen.js";
// import HomeScreen from "./screens/HomeScreen.js";
// import ProductScreen from "./screens/ProductScreen.js";
// import { parseRequestUrl } from "./utils.js";

// const routes = {
//     "/":HomeScreen,
//     "/product/:id":ProductScreen,
//     "/cart/:id":CartScreen,
//     "/cart":CartScreen
// }

// const router = async() => {
//     const request = parseRequestUrl();
//     const parseUrl = (request.resource ? `/${request.resource}` : '/') + 
//     (request.id? '/:id': '') +
//     (request.verb? `/${request.verb}`: '');
//     const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;
//     const section = document.getElementById("main-container");
//     // section.innerHTML = HomeScreen.render();

//     section.innerHTML = await screen.render();
//     await screen.after_render();

   
// };


// window.addEventListener('load', router);
// window.addEventListener('hashchange', router);




import CartScreen from "./screens/CartScreen.js";
import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import PayScreen from "./screens/PayScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";



import ProductScreen from "./screens/ProductScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import SigninScreen from "./screens/SigninScreen.js";
import Header from "./screens/header.js";
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";

const routes = {
    "/": HomeScreen,
    "/product/:id": ProductScreen,
    "/order/:id":PayScreen,
    "/cart/:id": CartScreen,
    "/cart": CartScreen, 
    "/signin":SigninScreen,
    "/register":RegisterScreen,
    "/profile":ProfileScreen,
    "/shipping":ShippingScreen,
    "/payment":PaymentScreen,
    "/placeorder":OrderScreen
   
  
};

const router = async () => {
   
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '') +
        (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const header = document.getElementById('header-container');
    const section = document.getElementById("main-container");
   
 
    section.innerHTML = await screen.render();
    if (screen.after_render) await screen.after_render();


    header.innerHTML = await Header.render();

    await header.after_render();

    
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
