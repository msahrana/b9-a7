import "./App.css";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
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
      <div className="flex flex-col lg:flex-row gap-10">
        <Cards></Cards>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
