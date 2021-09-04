import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Habits from "./pages/Habits";
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
        <Route
          exact
          path="/events"
          render={() => {
            <Habits></Habits>;
          }}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
