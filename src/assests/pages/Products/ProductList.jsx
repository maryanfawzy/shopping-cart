import { useEffect, useState } from "react"
import { ProductCard } from "../../../components/ProductCard"
import { FilterBar } from "./component/FilterBar"
import { useLocation } from "react-router-dom"

 const ProductsList = () => {
  const [show, setShow] = useState(false)
  const [products, setProducts] = useState([])
  const search = useLocation().search
  const searchTearm = new URLSearchParams(search).get("q")
  console.log(searchTearm)
  useEffect(()=>{ 
    async function fetchProducts(){
      const response = await fetch(`http://localhost:8000/products?name_like=${searchTearm ?searchTearm : '' }`)
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  },[])
  
    return (
      <main>
          <section className="my-5">
            <div className="my-5 flex justify-between">
              <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
              <span>
                <button onClick={()=> setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </button>
              </span>            
            </div>    
  
            <div className="flex flex-wrap justify-center lg:flex-row">
              {products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
              ))}
          
            </div>  
          </section>
          {show && <FilterBar setShow={setShow}/>}
        </main> 
    )
  }
  export default ProductsList