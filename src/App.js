import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home/home.js";
import About from "./pages/about/about.js";
import "./App.css"
import "./server.js"
import Van from "./pages/Van/Van.js";
import VanDetails from "./pages/Van/VanDetails/VanDetails.js";
import Layout from "./components/Layout/Layout.js";
import Dashboard from "./pages/Host/Dashboard/Dashboard.js";
import HostIncome from "./pages/Host/HostIncome/HostIncome.js";
import HostReview from "./pages/Host/HostReview/HostReview.js";
import HostLayout from "./components/HostLayout/HostLayout.js";
import HostVans from "./pages/Host/HostVans/HostVans.js";
import HostVansDetail from "./pages/Host/HostVans/HostVansDetail/HostVansDetail.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="van" element={<Van /> } />
          <Route path="van/:id" element={<VanDetails /> } />
          <Route  path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<HostIncome/>}/>
            <Route path="review" element={<HostReview/>}/>
            <Route path="vans" element={<HostVans/>}/>
            <Route path="vans/:id" element={<HostVansDetail/>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
