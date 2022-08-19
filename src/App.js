import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Producto from "./components/Producto";


function App() {
  
  let producto1 = {
    id: 100,
    name: "zapatos nike",
    price: 100
  };

  let producto2 = {
    id: 101,
    name: "zapatos adidas",
    price: 150
  };

  let producto3 = {
    id: 102,
    name: "vestido lola",
    price: 300
  }


  return (
    <>
      <NavBar />

      <Producto item={ producto1 } color={"coral"} />
      <Producto item={ producto2 } color={"green"} />
      <Producto item={ producto3 } color={"blue"} />


      <Footer />
    </>
  );
}

export default App;

