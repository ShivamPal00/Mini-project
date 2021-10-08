import './App.css';
import Events from './MyComp/Events';
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






function App() {
  return (
    <>
      <Router>
      
      {/* <Navbar/> */}
      {/* <Homepage/> */}
       {/* <Events/> */}
      {/* <Register/> */}
      {/* <Form/> */}
      <Switch>

          
          <Route exact path="/">
          <Homepage/>
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route  path="/register">
            <Register />
          </Route>
          <Route  path="/form">
            <Form/>
          </Route>
        </Switch>
        </Router>

      {/* <Events/> */}
      {/* <Register/> */}
      {/* <Form/> */}
    </>
  
  );
}

export default App;
