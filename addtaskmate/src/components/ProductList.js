import { useEffect, useState ,useCallback} from "react"
import { useFetch } from "../hooks/useFetch"
import Loader from '../assets/loading.gif'

export const ProductList = ()=>{
    const [product,setProducts] = useState([])
    const [url,setUrl] = useState("http://localhost:8000/product")

    const {data:products,loading,error} = useFetch(url)
    // setProducts(data)

    // if you are writing a fetchproducts method outside of useEffect method then we are facing issue
    // const fetchProducts = useCallback(async()=>{
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setProducts(data)
    // },[url])
    // // agr hum fetchproducts useEffect hooks ke outside mai data method declare kr rahe hai and that 
    // useEffect(()=>{
    //     fetchProducts()
    // },[fetchProducts])
    return(
            <section>
                <h1>Products List</h1>
                <div>
                <button className="all-products" onClick={()=>setUrl("http://localhost:8000/product")}>All</button>
                <button className="in-stock-products"onClick={()=>setUrl("http://localhost:8000/product?in_stock=true")}>In Stock</button>
                </div>
                {loading && <p><img className="loading-img" src={Loader} alt=""/></p>}
                {error && <p>{error}</p>}

                { products && products.map((product)=>{
                    return(
                        <div className="product-card">
                        <div className="product-info" key={product.id}>
                        <p>{product.name}</p>
                        <p>
                            <span>${product.price}</span>
                            <span>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                        </p>
                        </div>
                        </div>
                    )
                })}
            </section>
    )
}