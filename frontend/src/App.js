import './App.css';

import Form from './MyComp/Form';
import Homepage from './MyComp/Homepage/Homepage';
import Register from './MyComp/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Zdairies from './MyComp/Zdiaries';
import Zeal from './MyComp/Zeal';
import Avahan from './MyComp/Avahan';
import Hackathon from './MyComp/Hackathon';
import Adairies from './MyComp/Adiaries';
import Hdairies from './MyComp/Hdiaries';
import Singing from './MyComp/Singing';
import Drawing from './MyComp/Drawing';






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
          <Route  path="/singing">
            <Singing />
          </Route>
          <Route  path="/drawing">
            <Drawing/>
          </Route>
          <Route  path="/form">
            <Form/>
          </Route>
          <Route  path="/zdiaries">
          <Zdairies/>
          </Route>
          <Route  path="/adiaries">
          <Adairies/>
          </Route>
          <Route  path="/hdiaries">
          <Hdairies/>
          </Route>
        </Switch>
       
        </Router>
        
    
    </>
  
  );
}

export default App;
