import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
function App() {
  return (
    <Navbar></Navbar>
    // <Router>
    //   <Switch>
    //     <Route exact path="/"></Route>
    //     <Route exact path="/stats"></Route>
    //     <Route exact path="/dashboard"></Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
