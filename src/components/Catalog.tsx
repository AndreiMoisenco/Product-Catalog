import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Item from "./Item";
import { FaPlus } from "react-icons/fa6";


interface Beer {
  id: number;
  name: string;
  price: number;
  category: string;
  [key: string]: any;
}

interface CatalogProps {
  catalog: Item[];
}

interface Filters {
  category: string;
  minPrice: number;
  maxPrice: number;
}
interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  [key: string]: any;
}

export default function Catalog({ catalog }: CatalogProps) {
  const [catalogItems, setCatalogItems] = useState<Item[]>(catalog);
  const [showFilters, setShowFilters] = useState<boolean>(true);
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
        (item) => item.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.minPrice > 0) {
      tempCatalog = tempCatalog.filter((item) => item.price >= filters.minPrice);
    }

    if (filters.maxPrice > 0) {
      tempCatalog = tempCatalog.filter((item) => item.price <= filters.maxPrice);
    }

    setCatalogItems(tempCatalog);
  }, [filters, catalog]);

  return (
    <div>
      {catalog ? (
        <div>
          <div className="top">
            <div className="box">
              <h1>Catalog</h1>
            </div>
            <div className="box v2">
              <div className="element">
                <p>{catalog.length}</p>
                <p>products</p>
              
              </div>
              <div
                className="element"
                onClick={() => setShowFilters((prev) => !prev)} // <-- update this
              >
                <p>Filters</p>
                <FaPlus />
              </div>
              
            </div>
              
          </div>
         {showFilters && ( // <-- update this
            <div className="filters" id="filters">
              <div>
                <p className="title ">Categories</p>
              <select
                onChange={(ev) => {
                  setFilters({ ...filters, category: ev.target.value });
                }}
              >
                <option value="">All</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
              </div>
              <div>
                <p className="title">Price Range</p>
                <div className="range-input ">
                  <input
                    placeholder="Min"
                    
                    onChange={(ev) =>
                      setFilters({ ...filters, minPrice: Number(ev.target.value) })
                    }
                    
                  />
                  <input
                    
                    
                    onChange={(ev) =>
                      setFilters({ ...filters, maxPrice: Number(ev.target.value) })
                    }
                    placeholder="Max"
                    
                  />
                  <div className="slider">
                    <div className="progress"></div>
                  </div>
                </div>
              </div>
              
              
            </div>
          )}
          
          <div className="catalog">
          
          <div className="main">
            {catalogItems.map((test, index) => (
              <Item
                test={{
                  id: test.id,
                  title: test.title, 
                  price: test.price,
                  image: test.image 
                }}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
        </div>
        
      ) : (
        <Loader />
      )}
    </div>
  );
}
