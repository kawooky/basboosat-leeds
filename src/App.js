import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {MyNavbar} from "./components/Navbar/MyNavbar";
import logo from '../src/logo.png'
import { Home } from "./components/Home/Home";
import {Footer} from './components/Footer/Footer'


const App = () => {
  return (
    <div className="App">
      <Home/>

      <Footer/>
    </div>
  );
}

export default App;
