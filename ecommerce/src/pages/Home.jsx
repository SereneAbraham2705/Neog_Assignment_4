import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BackImg from "../images/back.jpg";
import JustImg  from "../images/just.jpg";
import CakeImg from "../images/cake.jpg"
import "../styles/Home.css";
// import { categories } from '../backend/db/categories';
import { CategoryContext } from '../contexts/CategoryContext';
import CategoryCard from "../components/CategoryCard";


function Home() {
   const {category} = useContext(CategoryContext)
  return (
    <div className='home'>
        <div>
        <img className="homeimg"src={BackImg} />
        <img className="homeimg"src={JustImg} />
        <img className="homeimg"src={CakeImg} />
        </div>
       <div className='homecont'>
            <h1 className='textin'>A party without cake is just a meeting
             <br></br>
             Bring on the Cake!
            </h1>
            <NavLink to="/explore">
            <button className='buttonhere'>ORDER NOW</button>
            </NavLink>
        </div>
        <br></br>
        <br></br>
        <div className='cateHome'>
            <h1>All Cakes Are Tailored To Your Taste and Style</h1>
            <h2>There are many cakes available at Sweet cakes. Order now!</h2>
        </div>
        <br></br>
        <br></br>
        <h1 id ="cake">Categories Of Cake Available</h1>

        <div className='category_list'>
  {category && category.map((item) => {
    return <CategoryCard className="itemcard" item={item} />;
  })}
</div>
    </div>
   
   
  )
}

export default Home