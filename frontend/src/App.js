import React,{ useEffect,Suspense,lazy } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {keepTheme} from './utils/themes'
import MakeRequest from './Components/Donee/request';


function App() {

  const Home = lazy (() => import ('./Components/Home/Home'))
  const DoneeSign = lazy (() => import ('./Components/Donee/Sign'))
  const DonorSign = lazy (() => import ('./Components/Donor/Sign'))
  const DoneeHome = lazy (() => import ('./Components/Donee/Home'))
  const MakeRequest = lazy (() => import ('./Components/Donee/request'))
  const DonorHome = lazy (() => import ('./Components/Donor/Home'))
  const AdminSign = lazy (() => import ('./Components/Admin/Sign'))
  const AdminHome = lazy (() => import ('./Components/Admin/home'))
  const AdminDonations = lazy (() => import ('./Components/Admin/donations'))
  const AdminDonors = lazy (() => import ('./Components/Admin/donors'))
  const AdminDonees = lazy (() => import ('./Components/Admin/Donee'))
  const UpdateDonor = lazy (() => import ('./Components/Admin/updateDonor'))
  const UpdateDonee = lazy (() => import ('./Components/Admin/updateDonee'))


  useEffect (() => {
    keepTheme()
  })
  return (
   <div>
     <Router>
       <Suspense fallback = {<div>loading....</div>}>
       <Route path="/" exact component={Home}/>
       <Route path="/donee/sign" exact component={DoneeSign}/>
       <Route path="/donee/home" exact component={DoneeHome}/>
       <Route path="/donee/request"  component={MakeRequest}/>
       <Route path="/donor/sign" component={DonorSign}/>
       <Route path="/donor/home" component={DonorHome}/>
       <Route path="/admin" exact component={AdminSign}/>
       <Route path="/admin/home" component={AdminHome}/>
       <Route path="/admin/donors" component={AdminDonors}/>
       <Route path="/admin/donee" component={AdminDonees}/>
       <Route path="/admin/donations" component={AdminDonations}/>
       <Route path="/admin/update-donor" component={UpdateDonor}/>
       <Route path="/admin/update-donee" component={UpdateDonee}/>
       </Suspense>
     </Router>
     
   </div>
  );
}

export default App;
