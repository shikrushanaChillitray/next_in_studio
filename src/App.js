import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import {Result} from "antd";
import './App.css';
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import withAuth from "./withAuth";
import store from "./store/store";
import CreateTaxAccountant from './pages/CreateTaxAccountant';
import AdminBoard from "./pages/AdminBoard"
import CreateTaxPayer from "./pages/CreateTaxPayer"
import TaxAccountantBoard from './pages/TaxAccoutantBoard';
import TaxPayerBoard from './pages/TaxPayerBoard';
import Payment from "./pages/Payment"
import NextInHome from "./pages/NextInHome"
import Game from './pages/3d/game';
import Palace from './pages/3d/palace';
import logo from "./images/logo2.PNG"
function App() {
  return (
    <Provider store={store}>
      
      <img src={logo} width={100} height={120} style={{position:'fixed',width:'150px',zIndex:9000000}}/>
      <Router>
        <Switch>
          <Route exact path="/" component={NextInHome} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Game}/>
          <Route path="/" component={Palace}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={withAuth(Home)} />
          <Route
            path="/create-tax-accountant"
            component={CreateTaxAccountant}
          />
          <Route path="/create-tax-payer" component={CreateTaxPayer} />
          <Route path="/adminboard" component={AdminBoard} />
          <Route path="/taxaccoutantboard" component={TaxAccountantBoard} />
          <Route path="/taxpayerboard" component={TaxPayerBoard} />
          <Route path="/payment" component={Payment} />

          <Route>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Link to="/login">Back Home</Link>}
            />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
