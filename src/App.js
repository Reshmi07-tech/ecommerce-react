import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="small-title">WELCOME TO SHOPEASE</p>

        <h1>
          Shop Smart.
          <br />
          Live Better.
        </h1>

        <p className="hero-text">
          Discover amazing products at the best prices.
        </p>

        <button>Shop Now →</button>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <nav className="navbar">
          <Link to="/" className="logo">
            ShopEase
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">🛒 Cart</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;