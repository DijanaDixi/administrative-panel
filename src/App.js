import React from "react";
import { BrowserRouter,Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ListReports from "./components/ListReports/ListReports";
import Login from "./components/Login/Login";
import Wizard from "./components/Wizard/Wizard";
import PublicRoute from "./utilis/PublicRoute"
import PrivateRoute from "./utilis/PrivateRoute"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={ListReports} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/wizard" component={Wizard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
