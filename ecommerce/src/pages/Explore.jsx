import React,{useContext, useState} from 'react';
import { CakeContext } from '../contexts/CakeContext';
import { CategoryContext } from '../contexts/CategoryContext';
import CakeCard from "../components/CakeCard";
import '../styles/Explore.css';
import { NavLink } from 'react-router-dom';

function Explore() {

const { products } = useContext(CakeContext);
const { category } = useContext(CategoryContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceSort, setPriceSort] = useState('');
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);

  const handlePriceSortChange = (event) => {
    const sortType = event.target.value;
    setPriceSort(sortType);

    let sortedProducts = [...products];
    if (sortType === 'lowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'highToLow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  const handleCategoryFilterChange = (event) => {
    const category = event.target.value;
    const isChecked = event.target.checked;

    let updatedFilters = [...categoryFilters];
    if (isChecked) {
      updatedFilters.push(category);
    } else {
      updatedFilters = updatedFilters.filter((filter) => filter !== category);
    }

    setCategoryFilters(updatedFilters);

    
    let filteredProducts = products.filter((product) =>
      updatedFilters.includes(product.categoryName)
    );

    
    if (priceSort === 'lowToHigh') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'highToLow') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filteredProducts);
  };

  const handleRatingFilterChange = (event) => {
   // setRatingFilter(value);
  //  let filteredProducts = products.filter((product) => product.rating >= value);
  //   filteredProducts = filteredProducts.filter((products) =>
  //    categoryFilters.includes(products.categoryName)
  //   );
  const ratingValue = parseFloat(event.target.value);
  setRatingFilter(ratingValue);

  let filteredProducts = products.filter((product) => product.rating >= ratingValue);

  if (categoryFilters.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      categoryFilters.includes(product.categoryName)
    );
  }
   
    if (priceSort === 'lowToHigh') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'highToLow') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filteredProducts);
  };

  const clearFilters = () => {
    setPriceSort('');
    setCategoryFilters([]);
    setRatingFilter(0);
    setFilteredProducts(products);
  };

  return (
    <div className="menu">
      <div className="filters">
        <h3>Filters</h3>
        <div className="filterItem">
          <h4>Price</h4>
          <div>
            <label>
              <input
                type="radio"
                value="lowToHigh"
                checked={priceSort === 'lowToHigh'}
                onChange={handlePriceSortChange}
              />
              Low to High
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="highToLow"
                checked={priceSort === 'highToLow'}
                onChange={handlePriceSortChange}
              />
              High to Low
            </label>
          </div>
        </div>

        <div className="filterItem">
        <h4>Category</h4>
        {category.map((category) => (
            <div key={category._id}>
              <label  className='check'>
                <input
                  type="checkbox"
                  value={category.categoryName}
                  checked={categoryFilters.includes(category.categoryName)}
                  onChange={handleCategoryFilterChange} 
                />
                {category.categoryName}
              </label>
            </div>
          ))}
        </div>

        <div className="filterItem">
          <h4>Ratings</h4>
          <input
            type="range"
            min={0}
            max={5}
            step={0.5}
            value={ratingFilter}
            // onChange={(event) => handleRatingFilterChange(parseFloat(event.target.value))}
            onChange={handleRatingFilterChange}
          />
          <p>Rating: {ratingFilter}</p>
        </div>

        <div className="filterItem">
          <button onClick={clearFilters}>Clear Filters</button>
        </div>
      </div>
    
      <div className="menuList">
        {filteredProducts.map((item) => (
          <NavLink to={`/explore/:{id}`} className="just">
            <CakeCard key={item._id} item={item} />
          </NavLink>
          
        ))}
      </div>
    
      
    </div>
  );


}

export default Explore;
