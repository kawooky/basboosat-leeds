import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { MyNavbar } from "./components/Navbar/MyNavbar";
import logo from "../src/logo.png";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Menu } from "./components/Menu/Menu";
import { Delivery } from "./components/Delivery/Delivery";
import { FAQ } from "./components/FAQ/FAQ";
import { SingleSweet } from "./components/SingleSweet/SingleSweet";

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>

        <Route
          path="/Menu/:sweetName"
          element={<SingleSweet/>}
        ></Route>

        <Route path="/Delivery" element={<Delivery />}></Route>
        <Route path="/FAQ" element={<FAQ />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
