import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/perfil">
          <Profile></Profile>
        </Route>

        <Route exact path="/login">
          <Login></Login>
        </Route>

        <Route exact path="/registro">
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
