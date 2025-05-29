import Navbar from "../components/Navbar"

import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "../components/Footer"
import Loader from "../components/Loader"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Card, CardContent } from "../components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../components/ui/carousel"
function Home(){
    const [home, setHome] = useState(null)
     useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => {
        const sliced = result.data.slice(0, 20); // limit to 10 items
        setHome(sliced);
        console.log(sliced); // log the 10 items
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
    return (
        <div>
            {
            home ? (
            <div className="">
                {/* <Promo/> */}
                <div className="border-b-[2px]">
                    <Navbar />
                </div>
                <div className="upper h-screen">
                            <div className="box">
                              <h1>Home</h1>
                              
                            </div>
                            <Link to="/products" className="discover">
                            <p >Discover the Catalog <FaArrowRight /></p> 
                            </Link>
                            
                            
                              
                </div>
                <div className="carousel">
                    {/* <Carousel>
                        <CarouselContent>
                            <CarouselItem className="basis-1/3">
                            </CarouselItem>
                            <CarouselItem className="basis-1/3">...</CarouselItem>
                            <CarouselItem className="basis-1/3">...</CarouselItem>
                        </CarouselContent>
                    </Carousel> */}
                </div>
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

export default Home