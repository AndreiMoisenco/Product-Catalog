import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Item from "./Item";

interface Beer {
  id: number;
  name: string;
  price: number;
  category: string;
  [key: string]: any;
}

interface CatalogProps {
  catalog: Beer[];
}

interface Filters {
  category: string;
  minPrice: number;
  maxPrice: number;
}

export default function Catalog({ catalog }: CatalogProps) {
  const [catalogBeers, setCatalogBeers] = useState<Beer[]>(catalog);
  const [filters, setFilters] = useState<Filters>({
    category: "",
    minPrice: 0,
    maxPrice: 0,
  });

  useEffect(() => {
    const rangeInput = document.querySelectorAll<HTMLInputElement>(".range-input input");
    const priceInput = document.querySelectorAll<HTMLInputElement>(".price-input input");
    const progress = document.querySelector<HTMLDivElement>(".slider .progress");

    const priceGap = 1000;

    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        const minVal = parseInt(rangeInput[0].value);
        const maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal >= priceGap && maxVal <= 100) {
          if ((e.target as HTMLInputElement).className === "input-min") {
            rangeInput[0].value = minVal.toString();
            if (progress)
              progress.style.left = (minVal / parseInt(rangeInput[0].max)) * 100 + "%";
          } else {
            rangeInput[1].value = maxVal.toString();
            if (progress)
              progress.style.right = 100 - (maxVal / parseInt(rangeInput[0].max)) * 100 + "%";
          }
        }
      });
    });

    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        const minVal = parseInt(rangeInput[0].value);
        const maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
          if ((e.target as HTMLInputElement).className === "range-min") {
            rangeInput[0].value = (maxVal - priceGap).toString();
          } else {
            rangeInput[1].value = (minVal + priceGap).toString();
          }
        } else {
          priceInput[0].value = minVal.toString();
          priceInput[1].value = maxVal.toString();
          if (progress) {
            progress.style.left = (minVal / parseInt(rangeInput[0].max)) * 100 + "%";
            progress.style.right = 100 - (maxVal / parseInt(rangeInput[0].max)) * 100 + "%";
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    let tempCatalog = [...catalog];

    if (filters.category !== "") {
      tempCatalog = tempCatalog.filter(
        (beer) => beer.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.minPrice > 0) {
      tempCatalog = tempCatalog.filter((beer) => beer.price >= filters.minPrice);
    }

    if (filters.maxPrice > 0) {
      tempCatalog = tempCatalog.filter((beer) => beer.price <= filters.maxPrice);
    }

    setCatalogBeers(tempCatalog);
  }, [filters, catalog]);

  return (
    <div>
      {catalog ? (
        <div className="catalog">
          <div className="side">
            <p className="title font-coustard text-2xl text-dark-blue">Categories</p>
             <select onChange={(ev) => {
               setFilters({...filters, category: ev.target.value})
              }} >
                <option value="">All</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                                        
             </select>
             <p className="title font-coustard text-2xl text-dark-blue pt-5">Price</p>
            <div>
              <div className="price-input pt-4">
                <input
                    type="number"
                    placeholder="minPrice"
                    onChange={(ev) =>
                      setFilters({ ...filters, minPrice: Number(ev.target.value) })
                    }
                    value={filters.minPrice}
                    className="input-min"
                  />
                  <input
                    type="number"
                    placeholder="maxPrice"
                    onChange={(ev) =>
                      setFilters({ ...filters, maxPrice: Number(ev.target.value) })
                    }
                    value={filters.maxPrice}
                    className="input-max"
                  />
              </div> 
              </div> 
                                         
                                     
                                     
          </div>
          <div className="main">
            {catalogBeers.map((test, index) => (
                <Item test={test} index={index} key={index} />
    ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
