import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import Sale from "../components/Sale";
import Values from "../components/Values";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Banner />
      <Product />
      <Values />
      <Sale />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
