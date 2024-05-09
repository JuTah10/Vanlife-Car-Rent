import MainPage from "./Components/MainPage/MainPage";
import Dashboard from "./Components/Host/Dashboard";
import About from "./Components/About/About";
import Vans from "./Components/Vans/Vans";
import VanDetail from "./Components/Vans/VanDetails";
import Income from "./Components/Host/Income";
import Reviews from "./Components/Host/Reviews";


import UserVansLayout from "./Components/Host/UserVans/UserVansLayout";
import UserVans from "./Components/Host/UserVans/UserVans";

import UserVansDetailsPage from "./Components/Host/UserVans/Details/Default/UserVansDetailsPage";
import UserVansPrice from "./Components/Host/UserVans/Price/UserVansPrice";
import UserVansPhotos from "./Components/Host/UserVans/Photos/UserVansPhotos";


import Login from "./Components/Login/Login";

import Layout from "./Layout";
import HostLayout from "./Components/Host/HostLayout";
import { BrowserRouter, Routes, Route} from "react-router-dom"





export default function App(){
    return(
      <div className="finished-product">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout/>}>  
                  <Route index element={<MainPage/>}/>
                  <Route path="/host" element={<HostLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="income" element={<Income/>}/>
                    <Route path="uservans" element ={<UserVans/>}/>
                    <Route path="uservans/:id" element={<UserVansLayout/>}>
                        <Route index element={<UserVansDetailsPage/>}/>
                        <Route path="price" element={<UserVansPrice/>}/>
                        <Route path="photos" element={<UserVansPhotos/>}/>
                    </Route>
                    <Route path="reviews" element={<Reviews/>}/>
                  </Route>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/vans" element={<Vans/>}/>
                  <Route path="/vans/:id" element={<VanDetail/>}/>
                  <Route path="login" element={<Login/>}/>
                  <Route path="*" element={<h1>Page not found</h1>}/>
                </Route>
              </Routes>
          </BrowserRouter>
      </div>

    );
}