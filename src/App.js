import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./components/Home1";

import About from "./components/About";
import Createaccount from "./components/Createaccount";
import Shop from "./components/Shop";
import ProductInfopage from "./components/ProductInfopage";
import AdminPage from "./components/AdminPage";

//import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/" element={<Createaccount />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productInfoPage" element={<ProductInfopage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
