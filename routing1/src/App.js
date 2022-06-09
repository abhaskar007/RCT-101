import "./App.css";
import { Navbar } from "./componenets/Navbar";
import { Home } from "./componenets/Home";
import { About } from "./componenets/About";
import { Products } from "./componenets/Products";
import { Route, Routes } from "react-router";
import { Product } from "./componenets/Product";

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/*" element={<Products />} >
        <Route path=":id" element={<Product />} />
      </Route>
      </Routes>
      
    </div>
  );
}

export default App;
