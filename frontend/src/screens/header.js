const Header = {
    render: async() => {
         // Retrieve user information from local storage
         const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'));
        return `
        <div class="container-lg">
        <div class="bg-black py-10 px-4">
            <div class="row">
                <div class="col-sm-6 col-lg-4 col-xl-3 text-center text-sm-start">
                    <div class="head-top-links text-body2"><span class="icon-btn"><i
                                class="fal fa-pennant"></i></span>
                        <ul>
                            <li><a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1"
                                    data-bs-toggle="dropdown" aria-expanded="false">Language</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                    <li><a href="#">German</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">Italian</a></li>
                                    <li><a href="#">Latvian</a></li>
                                    <li><a href="#">Spanish</a></li>
                                    <li><a href="#">Greek</a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink2"
                                    data-bs-toggle="dropdown" aria-expanded="false">Currency</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                    <li><a href="#">Canadian Dollar</a></li>
                                    <li><a href="#">Swiss Franc</a></li>
                                    <li><a href="#">Chinese Yuan</a></li>
                                    <li><a href="#">Australian Dollar</a></li>
                                    <li><a href="#">Swedish Krona</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col col-xl-4 text-center d-none d-sm-block">
                    <p class="text-body2 mb-0 fs-xs fw-semibold font-theme d-none d-lg-inline-block"><span
                            class="text-theme">Free exress</span> international delevery + Easy returens</p>
                </div>
                <div class="col-5 col-lg-4 col-xl-3 text-end text-xl-center d-none d-sm-block">
                    <div class="social-header fs-xs"><span
                            class="text-body2 fs-xs fw-semibold font-theme me-2">Social Network</span> <a
                            href="#"><i class="fab fa-facebook-f"></i></a> <a href="#"><i
                                class="fab fa-twitter"></i></a> <a href="#"><i
                                class="fal fa-basketball-ball"></i></a> <a href="#"><i
                                class="fab fa-pinterest-p"></i></a></div>
                </div>
                <div class="col-xl-2 text-center text-sm-end d-none d-xl-block">
                    <div class="head-top-links text-body2">
                    ${userInfoFromStorage
                        ? `<span class="icon-btn"><i class="fal fa-user"></i></span>
                           <ul>
                                <li><a href="/#/profile/"><span> ${userInfoFromStorage.name}</span></a></li>
                                <!-- Add any additional user-related options here -->
                             
                                <li><a href="/buyer-orders.html">Dashboard</a></li>
                           </ul>`
                        : `<ul>
                                <li><a href="/#/signin/">Login</a></li>
                                <li><a href="/#/register">Register</a></li>
                           </ul>`}
                    </div>
                </div>
            </div>
        </div>
        <div class="header2-inner px-4 position-relative py-3 py-lg-0">
            <div class="row align-items-center">
                <div class="col-6 col-lg-3 col-xl-3">
                    <div class="header-logo"><a href="index.html"><img src="assets/img/9j8kmm-LogoMakr.png" alt="Sokomkononi"></a>
                    </div>
                </div>
                <div class="col-6 col-lg-7 col-xl-6 text-end">
                    <nav class="main-menu menu-style1 mobile-menu-active menu-style1 text-center">
                        <ul>
                            <li class=""><a href="index.html">Home</a>
                            
                            </li>
                            <li class=""><a href="/#/cart">Cart</a>

                            </li>
                           
                           
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </nav><button type="button" class="vs-menu-toggle d-inline-block d-lg-none"><i
                            class="far fa-bars"></i></button>
                </div>
                <div class="col-lg-2 col-xl-3 text-end d-none d-lg-block"><a href="#"
                        class="icon-btn has-badge bg3 mr-20"><i class="fal fa-heart"></i><span
                            class="badge">0</span></a> <a href="#" class="icon-btn has-badge bg2 sideMenuToggler"><i
                            class="fal fa-shopping-cart"></i><span class="badge">0</span></a> <a href="shop.html"
                        class="vs-btn ms-4 d-none d-hd-inline-block">Purchase</a></div>
            </div>
        </div>
    </div>
        `;

    },
    after_render: async() => {}
};


export default Header;




// const Header = {
//     render: async () => {
       

//         return `
//     <div class="container-lg">
//     <div class="bg-black py-10 px-4">
//         <div class="row">
//             <div class="col-sm-6 col-lg-4 col-xl-3 text-center text-sm-start">
//                 <div class="head-top-links text-body2"><span class="icon-btn"><i
//                             class="fal fa-pennant"></i></span>
//                     <ul>
//                         <li><a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1"
//                                 data-bs-toggle="dropdown" aria-expanded="false">Language</a>
//                             <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
//                                 <li><a href="#">German</a></li>
//                                 <li><a href="#">French</a></li>
//                                 <li><a href="#">Italian</a></li>
//                                 <li><a href="#">Latvian</a></li>
//                                 <li><a href="#">Spanish</a></li>
//                                 <li><a href="#">Greek</a></li>
//                             </ul>
//                         </li>
//                         <li><a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink2"
//                                 data-bs-toggle="dropdown" aria-expanded="false">Currency</a>
//                             <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
//                                 <li><a href="#">Canadian Dollar</a></li>
//                                 <li><a href="#">Swiss Franc</a></li>
//                                 <li><a href="#">Chinese Yuan</a></li>
//                                 <li><a href="#">Australian Dollar</a></li>
//                                 <li><a href="#">Swedish Krona</a></li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <div class="col-lg-4 col col-xl-4 text-center d-none d-sm-block">
//                 <p class="text-body2 mb-0 fs-xs fw-semibold font-theme d-none d-lg-inline-block"><span
//                         class="text-theme">Free exress</span> international delevery + Easy returens</p>
//             </div>
//             <div class="col-5 col-lg-4 col-xl-3 text-end text-xl-center d-none d-sm-block">
//                 <div class="social-header fs-xs"><span
//                         class="text-body2 fs-xs fw-semibold font-theme me-2">Social Network</span> <a
//                         href="#"><i class="fab fa-facebook-f"></i></a> <a href="#"><i
//                             class="fab fa-twitter"></i></a> <a href="#"><i
//                             class="fal fa-basketball-ball"></i></a> <a href="#"><i
//                             class="fab fa-pinterest-p"></i></a></div>
//             </div>
//                 <div class="col-xl-2 text-center text-sm-end d-none d-xl-block">
//                     <div class="head-top-links text-body2">
                      
//                     </div>
//                 </div>
//             </div>
//         `;
//     },
//     after_render: async () => {}
// };

// export default Header;
