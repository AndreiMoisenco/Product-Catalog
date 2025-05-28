import Navbar from "../components/Navbar"
import Catalog from '../components/Catalog'
import Loader from "../components/Loader"
import { useEffect, useState } from "react"
import axios from "axios"
import { data } from "react-router-dom"
import Promo from "../components/Promo"

function Products({}){
    const [catalog, setCatalog] = useState(null)
     useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => {
        const sliced = result.data.slice(0, 10); // limit to 10 items
        setCatalog(sliced);
        console.log(sliced); // log the 10 items
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []); 
    return (
    <div>
            {
            catalog ? (
            <div className="">
                {/* <Promo/> */}
                <div className="border-b-[2px]">
                    <Navbar />
                </div>
                
                    
                    <Catalog catalog={ catalog} />
                
                
            </div>
            ) : 
            (
            <Loader />
            )}
    </div>
    )
}

export default Products