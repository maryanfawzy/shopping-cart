import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../../../components/ProductCard'

const FeaturedProduct = () => {
  const [product, setProduct] = useState([])
  useEffect(()=>{
    async function fetchProducts(){
      const response = await fetch('https://api.jikan.moe/v4/manga/3')
      // const response = await fetch("http://localhost:8000/featured_products")
      const data = await response.json()
      setProduct(data)

    }
    fetchProducts()
  }, [])
  return (
    <div>
        <section className="my-20">
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
          <div className="flex flex-wrap justify-center lg:flex-row">
            {product.map((product)=>(
               <ProductCard key={product.id} product= {product}/>

            ))}
           
            
              
          </div>
      </section>
    </div>
  )
}

export default FeaturedProduct
