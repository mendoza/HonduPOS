import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/app.css";
import AdminLayout from "layouts/Admin.jsx";
fetch("http://localhost:3001/GetCompanyData")
  .then(data => data.json())
  .then(Empresa => {
    document.title = Empresa.name;
  });
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/inicio" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
