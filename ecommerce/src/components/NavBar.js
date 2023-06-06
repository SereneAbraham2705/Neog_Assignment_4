import React,{useState,useContext} from 'react';
import '../styles/NavBar.css';
import { CakeContext } from '../contexts/CakeContext';
import Logo from "../images/logo.jpg";
import { NavLink } from 'react-router-dom';
function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const { products } = useContext(CakeContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Function to handle search query change
  const handleSearchQueryChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products based on search query
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className="navbar">
        <div className="leftnav">
            <img src={Logo} alt="Some image"/>
        </div>
        <div><input  className='inputdiv' type="text" placeholder='Start exploring'  value={searchQuery}
          onChange={handleSearchQueryChange}></input></div>
        <div className="rightnav">
            <nav>
                <NavLink className="nav_style"to="/">Home</NavLink>
                <NavLink className="nav_style"to="/explore">Explore</NavLink>
                <NavLink className="nav_style"to="/wishlist">WishList</NavLink>
                <NavLink className="nav_style"to="/cart">Cart</NavLink>
                <NavLink className="nav_style"to="/login">Login</NavLink>                
                <NavLink className="nav_style"to="/signup">Signup</NavLink>                
                <NavLink className="nav_style"to="/profile">Profile</NavLink>
            </nav>
        </div>
    </div>
  )
}

export default NavBar