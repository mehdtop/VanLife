import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import About from "./pages/about/about.js";
import Van, { loader as VanLoader } from "./pages/Van/Van.js";
import VanDetails, { loader as VanDetailsLoader } from "./pages/Van/VanDetails/VanDetails.js";
import Layout from "./components/Layout/Layout.js";
import Dashboard from "./pages/Host/Dashboard/Dashboard.js";
import HostIncome from "./pages/Host/HostIncome/HostIncome.js";
import HostReview from "./pages/Host/HostReview/HostReview.js";
import HostLayout from "./components/HostLayout/HostLayout.js";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans/HostVans.js";
import HostVansDetail, { loader as hostVansDetailLoader } from "./pages/Host/HostVans/HostVansDetail/HostVansDetail.js";
import Details from "./pages/Host/HostVans/HostVansDetail/details/Details.js";
import Photo from "./pages/Host/HostVans/HostVansDetail/photos/Photo.js";
import Pricing from "./pages/Host/HostVans/HostVansDetail/pricing/Pricing.js";
import NotFound from "./pages/NotFound/NotFound.js";
import Error from "./components/Error/Error.js";
import Login, { 
  loader as loginLoader,
  action as loginAction
 } from "./pages/Login/Login.js";
import { requiredLogin } from "./utils.js";
import "./App.css";
import "./server.js";

const requireAuthLoader = async ({request}) => await requiredLogin(request);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<>
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} loader={loginLoader}  action={loginAction} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Van />} loader={VanLoader} />
        <Route path="vans/:id" element={<VanDetails />} loader={VanDetailsLoader} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} loader={requireAuthLoader} />
          <Route path="income" element={<HostIncome />} loader={requireAuthLoader} />
          <Route path="review" element={<HostReview />} loader={requireAuthLoader} />
          <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
          <Route path="vans/:id" element={<HostVansDetail />} loader={hostVansDetailLoader}>
            <Route index element={<Details />} loader={requireAuthLoader} />
            <Route path="photos" element={<Photo />} loader={requireAuthLoader} />
            <Route path="pricing" element={<Pricing />} loader={requireAuthLoader} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
