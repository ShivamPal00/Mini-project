import './App.css';

import Form from './MyComp/Form';
import Homepage from './MyComp/Homepage/Homepage';
import Register from './MyComp/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './MyComp/Homepage/Navbar';
import Zdairies from './MyComp/Zdairies';
import Zeal from './MyComp/Zeal';
import Avahan from './MyComp/Avahan';
import Hackathon from './MyComp/Hackathon';
import Adairies from './MyComp/Adairies';
import Hdairies from './MyComp/Hdairies';






function App() {
  return (
    <>
      <Router>
      
     
      <Switch>

          
          <Route exact path="/">
          <Homepage/>
          </Route>
          <Route path="/zeal">
            <Zeal/>
          </Route>
          <Route path="/avahan">
            <Avahan/>
          </Route>
          <Route path="/hackathon">
            <Hackathon/>
          </Route>
          <Route  path="/register">
            <Register />
          </Route>
          <Route  path="/form">
            <Form/>
          </Route>
          <Route  path="/zdairies">
          <Zdairies/>
          </Route>
          <Route  path="/adairies">
          <Adairies/>
          </Route>
          <Route  path="/hdairies">
          <Hdairies/>
          </Route>
        </Switch>
       
        </Router>
        
    
    </>
  
  );
}

export default App;
