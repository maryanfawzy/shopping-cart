// import React, { useEffect, useState } from 'react'
// import { ProductCard } from '../../../../components/ProductCard'

// const FeaturedProduct = () => {
//   const [product, setProduct] = useState([])
//   useEffect(()=>{
//     async function fetchProducts(){
//       const response = await fetch('https://api.jikan.moe/v4/manga/3')
//       // const response = await fetch("http://localhost:8000/featured_products")
//       const data = await response.json()
//       setProduct(data)

//     }
//     fetchProducts()
//   }, [])
//   return (
//     <div>
//         <section className="my-20">
//           <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
//           <div className="flex flex-wrap justify-center lg:flex-row">
//             {product.map((product)=>(
//                <ProductCard key={product.id} product= {product}/>

//             ))}
           
            
              
//           </div>
//       </section>
//     </div>
//   )
// }

// export default FeaturedProduct




// import React, { useEffect, useState } from "react";
// import { ProductCard } from "../../../../components/ProductCard";

// const FeaturedProduct = () => {
//   const [product, setProduct] = useState(null);
  
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await fetch(`https://api.jikan.moe/v4/manga`);
//         const result = await response.json();
        
//         setProduct(result.data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   if (!product) {
//     return (
//       <div className="text-center my-20 dark:text-slate-100">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div>
//       <section className="my-20">
//         <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
//           Featured eBooks
//         </h1>
//         <div className="flex flex-wrap justify-center lg:flex-row">
//              <ProductCard product={product} />
//              <ProductCard product={product} />
//              <ProductCard product={product} />

          
         
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FeaturedProduct;

// import React, { useEffect, useState } from "react";
// import { ProductCard } from "../../../../components/ProductCard";

// const FeaturedProduct = () => {
//   const [product, setProduct] = useState(null);
  
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await fetch('https://api.jikan.moe/v4/manga/3');
//         const result = await response.json();
        
//         setProduct(result.data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   if (!product) {
//     return (
//       <div className="text-center my-20 dark:text-slate-100">
//         Loading...
//       </div>
//     )
//   }

//   return (
//     <div>
//       <section className="my-20">
//         <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
//           Featured eBooks
//         </h1>
//         <div className="flex flex-wrap justify-center lg:flex-row">
//           <ProductCard product={product} />
//           <ProductCard product={product} />
//           <ProductCard product={product} />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FeaturedProduct;


import React, { useEffect, useState } from "react";
import { ProductCard } from "../../../../components/ProductCard";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('https://api.jikan.moe/v4/top/manga');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
       
        setProducts(result.data?.slice(0, 3) || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load featured products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center my-20 dark:text-slate-100">
        <div className="animate-pulse">Loading featured products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center my-20 text-red-500 dark:text-red-400">
        {error}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="text-center my-20 dark:text-slate-100">
        No featured products available at the moment.
      </div>
    );
  }

  return (
    <div>
      <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
          Featured eBooks
        </h1>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.mal_id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProduct;

