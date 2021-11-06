import React,{ useEffect,Suspense,lazy } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {keepTheme} from './utils/themes'


function App() {

  const Home = lazy (() => import ('./Components/Home/Home'))
  const Navbar = lazy (() => import ('./Components/Navbar/Navbar'))
  const DoneeSign = lazy (() => import ('./Components/Donee/Sign'))
  const DonorSign = lazy (() => import ('./Components/Donor/Sign'))
  const DoneeHome = lazy (() => import ('./Components/Donee/Home'))
  const DonorHome = lazy (() => import ('./Components/Donor/Home'))


  useEffect (() => {
    keepTheme()
  })
  return (
   <div>
     <Router>
       <Suspense fallback = {<div>loading....</div>}>
       <Route path="/" exact component={Home}/>
       <Route path="/donee/sign" component={DoneeSign}/>
       <Route path="/donee/home" component={DoneeHome}/>
       <Route path="/donor/sign" component={DonorSign}/>
       <Route path="/donor/home" component={DonorHome}/>
       </Suspense>
     </Router>
     
   </div>
  );
}

export default App;
