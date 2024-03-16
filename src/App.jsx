import {useState} from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Swal from "sweetalert2";
import Footer from "./components/Footer/Footer";

function App() {
  const [carts, setCarts] = useState([]);
  const [prepare, setPrepare] = useState([]);

  const handleAddToCart = (card) => {
    const isExist = carts.find((item) => item.recipe_id === card.recipe_id);
    if (isExist) {
      Swal.fire({
        icon: "warning",
        title: "Sorry",
        text: "This recipe item already added!",
      });
      return;
    }
    Swal.fire("Recipe item added successfully!");
    setCarts([...carts, card]);
  };

  const handlePreparing = (card) => {
    const newCart = carts.filter((item) => item.recipe_id !== card.recipe_id);
    setCarts(newCart);
    setPrepare([...prepare, card]);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header></Header>
      <Banner></Banner>
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold">Our Recipes</h1>
        <p className="mt-6">
          Welcome to <span className="font-bold">Mama Restaurant</span>, where
          every dish tells a story of home-cooked comfort and culinary
          tradition. Our recipes reflect the <br />
          love and care Mama puts into every meal, drawing inspiration from
          generations of family cooking.
        </p>
      </div>
      <div className="divider"></div>
      <div className="flex flex-1 flex-col lg:flex-row gap-10">
        <Cards handleAddToCart={handleAddToCart}></Cards>
        <Cart
          carts={carts}
          handlePreparing={handlePreparing}
          prepare={prepare}
        ></Cart>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
