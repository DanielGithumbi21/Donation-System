import Navbar from './Components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Components/Home/Home';
import DoneeSign from './Components/Donee/Sign';
import DonorSign from './Components/Donor/Sign';

function App() {
  return (
   <div>
     <Router>
       <Navbar/>
       <Route path="/" exact component={Home}/>
       <Route path="/donee/sign" component={DoneeSign}/>
       <Route path="/donor/sign" component={DonorSign}/>
     </Router>
     
   </div>
  );
}

export default App;
