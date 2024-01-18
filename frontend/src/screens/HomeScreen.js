// first virsion

// import data from '../data.js';

// const HomeScreen = {
//   render: () => {
//     const { products } = data;

//     const productHTML = products.map((product) => `
//       <div class="col-sm-6 col-lg-4 col-xl-3 grid-item ${product.category.toLowerCase()}">
//         <div class="vs-product-box1 thumb_swap">
//           <div class="product-img">
//             <a href="#/product/${product._id}">
//               <img src="${product.image}" alt="Product Image" class="w-100">
//             </a>
//             <a href="#/product/${product._id}">
//               <img src="${product.image1}" alt="Product Image" class="w-100 img_swap">
//             </a>
//           </div>
//           <div class="product-content">
//             <div class="actions-btn">
//               <a href="#"><i class="fal fa-cart-plus"></i></a>
//               <a href="#"><i class="far fa-search"></i></a>
//               <a href="#"><i class="fal fa-heart"></i></a>
//               <a href="#"><i class="fal fa-layer-group"></i></a>
//             </div>
//             <h4 class="product-title h5 mb-0">
//               <a href="#/product/${product._id}">${product.name}</a>
//             </h4>
//             <span class="price font-theme"><strong>$${product.price.toFixed(2)}</strong></span>
//             <p class="m-0 rating fs-xs text-theme lh-base">
//               ${'⭐'.repeat(Math.floor(product.rating))}${product.rating % 1 !== 0 ? '⭐' : ''}
//             </p>
//           </div>
//         </div>
//       </div>
//     `).join('\n');

//     return `
//       <section class="vs-shop-wrapper position-relative space-top space-md-bottom" id="main-container">
//         <div class="container">
//           <div class="section-title text-center wow fadeIn" data-wow-delay="0.3s">
//             <h2 class="sec-title1">Feature Products</h2>
//             <h3 class="sec-title2">Latest Arrivals</h3>
//             <img src="assets/img/icons/sec-icon-1.png" alt="Section Icon">
//           </div>
//           <div class="filter-menu-style1 filter-menu-active text-center mb-65">
//             <button class="active" data-filter="*" data-bg-src="assets/img/shape/shape-filter.png">
//               <i class="flaticon-salad"></i>Show All
//             </button>
//             <button data-filter=".meat" data-bg-src="assets/img/shape/shape-filter.png">
//               <i class="flaticon-salad-1"></i>Meat
//             </button>
//             <button data-filter=".freshfood" data-bg-src="assets/img/shape/shape-filter.png">
//               <i class="flaticon-vegetables"></i>Fresh Food
//             </button>
//             <button data-filter=".season" data-bg-src="assets/img/shape/shape-filter.png">
//               <i class="flaticon-healthy-food"></i>Season
//             </button>
//           </div>
//           <div class="row filter-active">
//             ${productHTML}
//           </div>
//         </div>
//       </section>
//     `;
//   },
// };

// export default HomeScreen;








// const HomeScreen = {
//   render: async () => {
   
//     const response = await fetch ("http://localhost:5000/api/products",{

//     headers:{
//              'Content-Type':'application/json',
      
//              },

//     });
//     if (!response || !response.ok){

//       return `<div>Error in getting data</div>`;

//     }

//     const products = await response.json();
//     const productHTML = products.map((product) => `
//       <div class="col-sm-6 col-lg-4 col-xl-3 grid-item ${product.category.toLowerCase()}">
//         <div class="vs-product-box1 thumb_swap">
//           <div class="product-img">
//             <a href="#/product/${product._id}">
//               <img src="${product.image}" alt="Product Image" class="w-100">
//             </a>
//             <a href="#/product/${product._id}">
//               <img src="${product.image1}" alt="Product Image" class="w-100 img_swap">
//             </a>
//           </div>
//           <div class="product-content">
//             <div class="actions-btn">
//               <a href="#"><i class="fal fa-cart-plus"></i></a>
//               <a href="#"><i class="far fa-search"></i></a>
//               <a href="#"><i class="fal fa-heart"></i></a>
//               <a href="#"><i class="fal fa-layer-group"></i></a>
//             </div>
//             <h4 class="product-title h5 mb-0">
//               <a href="#/product/${product._id}">${product.name}</a>
//             </h4>
//             <span class="price font-theme"><strong>$${product.price.toFixed(2)}</strong></span>
//             <p class="m-0 rating fs-xs text-theme lh-base">
//               ${'⭐'.repeat(Math.floor(product.rating))}${product.rating % 1 !== 0 ? '⭐' : ''}
//             </p>
//           </div>
//         </div>
//       </div>
//     `).join('\n');

//     return `
//       <section class="vs-shop-wrapper position-relative space-top space-md-bottom" id="main-container">
//         <div class="container">
//           <div class="section-title text-center wow fadeIn" data-wow-delay="0.3s">
//             <h2 class="sec-title1">Feature Products</h2>
//             <h3 class="sec-title2">Latest Arrivals</h3>
//             <img src="assets/img/icons/sec-icon-1.png" alt="Section Icon">
//           </div>
//           <div class="filter-menu-style1 filter-menu-active text-center mb-65">
//             <button class="active" data-filter="*" data-bg-src="assets/img/shape/shape-filter.png">
//               <i class="flaticon-salad"></i>Show All
//             </button>
//             <button data-filter=".meat" data-bg-src="assets/img/shape/shape-filter.png">
//               <i class="flaticon-salad-1"></i>Meat
//             </button>
//             <button data-filter=".freshfood" data-bg-src="assets/img/shape/shape-filter.png">
//               <i class="flaticon-vegetables"></i>Fresh Food
//             </button>
//             <button data-filter=".season" data-bg-src="assets/img/shape/shape-filter.png">
//               <i class="flaticon-healthy-food"></i>Season
//             </button>
//           </div>
//           <div class="row filter-active">
//             ${productHTML}
//           </div>
//         </div>
//       </section>
//     `;
//   },
// };

// export default HomeScreen;


// 2nd version

// const HomeScreen = {
//   after_render: async () => {
//     // Your render logic here
// },

//   render: async() => {
   
//     const response = await fetch ("http://localhost:5000/api/products", {
//       headers:{
//         'Content-Type':'application/json',

//       },
//     });
//     if (!response || !response.ok){
//       return `<div>Error in getting data</div>`;
//     }

//     const products = await response.json();
//     const productHTML = products.map((product) => `
//       <div class="col-sm-6 col-lg-4 col-xl-3 grid-item ${product.category.toLowerCase()}">
//         <div class="vs-product-box1 thumb_swap">
//           <div class="product-img">
//             <a href="#/product/${product._id}">
//               <img src="${product.image}" alt="Product Image" class="w-100">
//             </a>
//             <a href="#/product/${product._id}">
//               <img src="${product.image1}" alt="Product Image" class="w-100 img_swap">
//             </a>
//           </div>
//           <div class="product-content">
//           <div class="actions-btn">
//             <a href="#"><i class="fal fa-cart-plus"></i></a>
//             <a href="#"><i class="far fa-search"></i></a>
//             <a href="#"><i class="fal fa-heart"></i></a>
//             <a href="#"><i class="fal fa-layer-group"></i></a>
//           </div>
//           <h4 class="product-title h5 mb-0">
//             <a href="/shop-details.html/#/product/${product._id}">${product.name}</a>
//           </h4>
//           <span class="price font-theme"><strong>$${product.price.toFixed(2)}</strong></span>
//           <p class="m-0 rating fs-xs text-theme lh-base">
//             ${'⭐'.repeat(Math.floor(product.rating))}${product.rating % 1 !== 0 ? '⭐' : ''}
//           </p>
//         </div>
//         </div>
//       </div>
//     `).join('\n');

//     return `
//     <section class="vs-shop-wrapper position-relative space-top space-md-bottom" id="main-container">
//     <div class="container">
//       <div class="section-title text-center wow fadeIn" data-wow-delay="0.3s">
//         <h2 class="sec-title1">Feature Products</h2>
//         <h3 class="sec-title2">Latest Arrivals</h3>
//         <img src="assets/img/icons/sec-icon-1.png" alt="Section Icon">
//       </div>
//       <div class="filter-menu-style1 filter-menu-active text-center mb-65">
//         <button class="active" data-filter="*" data-bg-src="assets/img/shape/shape-filter.png">
//           <i class="flaticon-salad"></i>Show All
//         </button>
//         <button data-filter=".meat" data-bg-src="assets/img/shape/shape-filter.png">
//           <i class="flaticon-salad-1"></i>Meat
//         </button>
//         <button data-filter=".freshfood" data-bg-src="assets/img/shape/shape-filter.png">
//           <i class="flaticon-vegetables"></i>Fresh Food
//         </button>
//         <button data-filter=".season" data-bg-src="assets/img/shape/shape-filter.png">
//           <i class="flaticon-healthy-food"></i>Season
//         </button>
//       </div>
//       <div class="row filter-active">
//         ${productHTML}
//       </div>
//     </div>
//   </section>
//     `;
//   },
// };

// export default HomeScreen;





const HomeScreen = {
  after_render: async () => {
    // Your render logic here
  },

  render: async () => {

    
 

    const response = await fetch("http://localhost:5000/api/products", {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response || !response.ok) {
      return `<div>Error in getting data</div>`;
    }

    const products = await response.json();
    const productHTML = products.map((product) => `
      <!-- Your existing product HTML code -->

      <div class="col-sm-6 col-lg-4 col-xl-3 grid-item ${product.category.toLowerCase()}">
      <div class="vs-product-box1 thumb_swap">
        <div class="product-img">
          <a href="#/product/${product._id}">
            <img src="http://localhost:5000${product.image}" alt="Product Image" class="w-100">
          </a>
          <a href="#/product/${product._id}">
            <img src="http://localhost:5000${product.image1}" alt="Product Image" class="w-100 img_swap">
          </a>
        </div>
        <div class="product-content">
        <div class="actions-btn">
          <a href="#"><i class="fal fa-cart-plus"></i></a>
          <a href="#"><i class="far fa-search"></i></a>
          <a href="#"><i class="fal fa-heart"></i></a>
          <a href="#"><i class="fal fa-layer-group"></i></a>
        </div>
        <h4 class="product-title h5 mb-0">
          <a href="/shop-details.html/#/product/${product._id}">${product.name}</a>
        </h4>
        <span class="price font-theme"><strong>$${product.price.toFixed(2)}</strong></span>
        <p class="m-0 rating fs-xs text-theme lh-base">
          ${'⭐'.repeat(Math.floor(product.rating))}${product.rating % 1 !== 0 ? '⭐' : ''}
        </p>
      </div>
      </div>
    </div>
    `).join('\n');

 

    return `
      <!-- Your existing HTML code -->
   


      <section class="vs-shop-wrapper position-relative space-top space-md-bottom" id="main-container">
      <div class="container">
        <div class="section-title text-center wow fadeIn" data-wow-delay="0.3s">
          <h2 class="sec-title1">Feature Products</h2>
          <h3 class="sec-title2">Latest Arrivals</h3>
          <img src="assets/img/icons/sec-icon-1.png" alt="Section Icon">
        </div>
        <div class="filter-menu-style1 filter-menu-active text-center mb-65">
          <button class="active" data-filter="*" data-bg-src="assets/img/shape/shape-filter.png">
            <i class="flaticon-salad"></i>Show All
          </button>
          <button data-filter=".meat" data-bg-src="assets/img/shape/shape-filter.png">
            <i class="flaticon-salad-1"></i>Meat
          </button>
          <button data-filter=".freshfood" data-bg-src="assets/img/shape/shape-filter.png">
            <i class="flaticon-vegetables"></i>Fresh Food
          </button>
          <button data-filter=".season" data-bg-src="assets/img/shape/shape-filter.png">
            <i class="flaticon-healthy-food"></i>Season
          </button>
        </div>
        <div class="row filter-active">
          ${productHTML}
        </div>
      </div>
    </section>
    `;
  },
};

export default HomeScreen;
