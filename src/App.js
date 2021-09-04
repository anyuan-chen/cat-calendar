import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Habits from "./pages/Habits";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home></Home>}></Route>
        <Route
          exact
          path="/schedule"
          render={() => <Schedule></Schedule>}
        ></Route>
        <Route exact path="/habits" render={() => <Habits></Habits>}></Route>
        <Route exact path="/events" render={() => <Events></Events>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
