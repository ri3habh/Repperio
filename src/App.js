import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Products from "./components/products";
import Resources from "./components/resources";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Overall objective of the website: 
//- Excercise? A Website that teaches people how to excercise?
//- Overall blog/article website
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
      <Navbar />
        <Switch>
        
          <Route path="/Products" component={Products}>
            <Products />
          </Route>
          <Route path="/Contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/Resources" component={Resources}>
            <Resources />
            </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
         
        </Switch>
  
    </Router>
    </div>
    <Footer />
    </div>
  );
}

export default App;

