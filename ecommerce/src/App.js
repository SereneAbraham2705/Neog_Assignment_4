import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Cart from"./pages/Cart";
import WishList from "./pages/WishList"

function App() {
  return (
    <div className="App">
    <NavBar />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/explore" element={<Explore />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/wishlist" element={<WishList />}></Route>
     </Routes>
     <Footer />
    </div>
   
  );
}

export default App;
