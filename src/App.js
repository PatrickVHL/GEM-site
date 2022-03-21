import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Pricing from "./components/Pricing.jsx";

export default function App() {
  return (
    <div className="App">
      <div className="container py-3">
        <Header />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}
