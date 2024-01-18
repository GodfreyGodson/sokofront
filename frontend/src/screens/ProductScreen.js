// import { getProduct } from "../api.js";
// import { parseRequestUrl } from "../utils.js";

// const ProductScreen = {
//     render: async()=>{
//         const request = parseRequestUrl();
//         const product = await getProduct(request.id);
//         return `<h1>${product.name}</h1>`
//     }
// };

// export default ProductScreen;


// export default ProductScreen;

// first version
// const ProductScreen = {
//     render:()=>{
//         return `<div>Product name</div>`;
//     }
// };


// export default ProductScreen;

// 2nd version
// import { parseRequestUrl } from "../utils.js";

// const getProduct = async (id) => {
//   try {
//     const response = await fetch(`http://localhost:5000/api/products/${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch product');
//     }

//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.error(err);
//     return { error: err.message };
//   }
// };

// const ProductScreen = {
//   render: async () => {
//     const request = parseRequestUrl();

//     try {
//       const product = await getProduct(request.id);

//       return `
//         <div>
//           <h1>${product.name}</h1>
//           <p>Price: $${product.price.toFixed(2)}</p>
//           <p>Rating: ${'⭐'.repeat(Math.floor(product.rating))}${product.rating % 1 !== 0 ? '⭐' : ''}</p>
//           <!-- Add more details as needed -->
//         </div>
//       `;
//     } catch (error) {
//       console.error(error);
//       return `<div>Error in getting product data</div>`;
//     }
//   },
// };

// export default ProductScreen;




import { parseRequestUrl } from "../utils.js";

// export const getProduct = async (id) => {
//   try {
//     const response = await fetch(`http://localhost:5000/api/products/${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch product');
//     }

//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.error(err);
//     return { error: err.message };
//   }
// };


export const getProduct = async (id) => {
  console.log('Fetching product with ID:', id);
  try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          throw new Error('Failed to fetch product');
      }

      const data = await response.json();
      console.log('Product data:', data);
      return data;
  } catch (err) {
      console.error('Error fetching product:', err);
      return { error: err.message };
  }
};


const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document.getElementById("add-button").addEventListener('click', 
    ()=>{
      document.location.hash = `/cart/${request.id}`;
    });

  },
  render: async () => {
    const request = parseRequestUrl();

    try {
      const product = await getProduct(request.id);

      return `
        <section class="vs-shop-wrapper shop-details space-top space-md-bottom">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-6 col-xl-5 mb-30 mb-md-0">
                        <div class="product-big-img vs-carousel" data-slide-show="1" data-lg-slide-show="1"
                            data-md-slide-show="1" data-sm-slide-show="1" data-fade="true" data-dots="true"
                            data-asnavfor="#thumbproductimg" id="bigproductimg">
                            <div class="product-img"><img src="http://localhost:5000${product.image}" alt="Product Image"
                                    class="w-100"></div>

                                  
                            <!-- Add more images if needed -->
                        </div>
                        <div class="row gx-2 product-thumb-img pt-10 vs-carousel" data-slide-show="4" data-md-slide-show="3"
                            data-sm-slide-show="3" data-xs-slide-show="2" data-arrows="true"
                            data-next-arrow="far fa-long-arrow-right" data-prev-arrow="far fa-long-arrow-left"
                            id="thumbproductimg" data-asnavfor="#bigproductimg">
                            <div class="col-auto">
                                <div class="thumb"><img src="http://localhost:5000${product.image1}" alt="Thumb Image"
                                        class="w-100"></div>
                            </div>
                            <!-- Add more thumbnails if needed -->
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="product-content">
                            <h3 class="product-title mb-1">${product.name}</h3>
                            <span class="price font-theme"><strong>$${product.price.toFixed(2)}</strong></span>
                            <div class="mt-2">
                                <div class="star-rating" role="img" aria-label="Rated ${product.rating} out of 5">
                                    <span style="width: ${(product.rating / 5) * 100}%"></span>
                                </div>
                            </div>
                            <p class="fs-xs my-4">${product.description}</p>
                            <!-- Add more product details if needed -->
                            <div class="mt-2 link-inherit fs-xs">
                                <p><strong class="text-title me-3 font-theme">Availability :</strong><a href="#"><i
                                            class="far fa-check-square me-2 ms-1"></i>In Stock</a></p>
                            </div>
                            <div class="actions mb-4 pb-2">
                                <div class="quantity style2 me-4"><input type="number" class="qty-input" value="1" min="1"
                                        max="99"> <button class="quantity-minus qut-btn"><i
                                            class="far fa-chevron-down"></i></button> <button
                                        class="quantity-plus qut-btn"><i class="far fa-chevron-up"></i></button></div>
                                        <button
                                    class="vs-btn shadow-none" id="add-button">Add To Cart</button>
                            </div>
                            <div class="product_meta"><span class="sku_wrapper">SKU: <span
                                        class="sku">${product.sku}</span></span> <span class="posted_in">Category: <a href="#"
                                        rel="tag">${product.category}</a></span></div>
                        </div>
                    </div>
                    <!-- Add more product-related content if needed -->
                </div>
            </div>
        </section>
      `;
    } catch (error) {
      console.error(error);
      return `<div>Error in getting product data</div>`;
    }
  },
};

export default ProductScreen;

