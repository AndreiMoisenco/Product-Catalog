import Navbar from "../components/Navbar"
import Catalog from '../components/Catalog'
import Loader from "../components/Loader"
import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "../components/Footer"



function Products({}){
    const [catalog, setCatalog] = useState(null)
     useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => {
        const sliced = result.data.slice(0, 20); // limit to 10 items
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
                
                <div className="border-b-[2px]">
                    <Navbar />
                </div>
                
                
                    
                    <Catalog catalog={ catalog} />
                
                <div className="border-t-[2px] mt-14">
                    <Footer/>
                </div>
            </div>
            ) : 
            (
            <Loader />
            )}
    </div>
    )
}

export default Products