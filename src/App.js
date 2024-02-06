import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route} from "react-router-dom"
import Home from "./pages/home/home.js";
import About from "./pages/about/about.js";
import "./App.css"
import "./server.js"
import Van,{loader as VanLoader} from "./pages/Van/Van.js";
import VanDetails, {loader as VanDetailsLoader} from "./pages/Van/VanDetails/VanDetails.js";
import Layout from "./components/Layout/Layout.js";
import Dashboard from "./pages/Host/Dashboard/Dashboard.js";
import HostIncome from "./pages/Host/HostIncome/HostIncome.js";
import HostReview from "./pages/Host/HostReview/HostReview.js";
import HostLayout from "./components/HostLayout/HostLayout.js";
import HostVans , {loader as hostVansListLoader} from "./pages/Host/HostVans/HostVans.js";
import HostVansDetail,{loader as hostVansDetailLoader} from "./pages/Host/HostVans/HostVansDetail/HostVansDetail.js";
import Details from "./pages/Host/HostVans/HostVansDetail/details/Details.js";
import Photo from "./pages/Host/HostVans/HostVansDetail/photos/Photo.js";
import Pricing from "./pages/Host/HostVans/HostVansDetail/pricing/Pricing.js";
import NotFound from "./pages/NotFound/NotFound.js";
import Error from "./components/Error/Error.js";
import Login, {loader as loginLoader} from "./pages/Login/Login.js";
import { requiredLogin } from "./utils.js";
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    
   <Route element={<Layout/>} errorElement={<Error />} >
      <Route path='/' element={<Home />}/>
      <Route path="login" element={<Login/>} loader={loginLoader}/>
      <Route path="about" element={<About />}/>
      <Route path="van" element={<Van /> } loader={VanLoader} />
      <Route path="van/:id" element={<VanDetails /> } loader={VanDetailsLoader} />
      <Route  path="host" element={<HostLayout/>}>
        <Route index element={<Dashboard />}loader={async()=> await requiredLogin()} />
        <Route path="income" element={<HostIncome/>} loader={async()=> await requiredLogin()} />
        <Route path="review" element={<HostReview/>}loader={async()=> await requiredLogin()} />
        <Route path="vans" element={<HostVans/>} loader={hostVansListLoader}/>
        <Route path="vans/:id" element={<HostVansDetail/>} loader={hostVansDetailLoader}>
          <Route index element={<Details/>}loader={async()=> await requiredLogin()} />
          <Route path="photos" element={<Photo/>}loader={async()=> await requiredLogin()} />
          <Route path="pricing" element={<Pricing/>}loader={async()=> await requiredLogin()} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Route>

  ))
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
