import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio';
// import AssetDiagram from './pages/AssetDiagram'
// import Game from './pages/Game'
import { NoMatch } from "./Pages/NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
//import Currency from "./Pages/Currency";
import { cryptoProvider } from "./utils/GlobalStore";

function App() {
  return (
    <React.Fragment>
      <Router>
        <cryptoProvider>
          <Switch>
            <Route exact path={['/Login']} component={Login} />
            <Route exact path={['/', '/Home']} component={Home} />
            <Route exact path={['/Register']} component={Register} />
            <Route exact path={['/Portfolio']} component={Portfolio} />
            {/* <Route exact path={['/AssetDiagram']} component={AssetDiagram} /> */}
            {/* <Route exact path={['/Game']} component={Game} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </cryptoProvider>
      </Router>
    </React.Fragment>
  );
}


export default App;
