
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from './components/Nav/Nav.js';
import Home from "./pages/home/home.js";
import About from "./pages/about/about.js";
import "./App.css"
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
