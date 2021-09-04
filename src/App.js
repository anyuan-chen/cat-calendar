import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
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
      </Switch>
    </Router>
  );
}

export default App;
