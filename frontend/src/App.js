import Navbar from './Components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Components/Home/Home';

function App() {
  return (
   <div>
     <Router>
       <Navbar/>
       <Route to="/" exact component={Home}/>
     </Router>
     
   </div>
  );
}

export default App;
