import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dev from "./components/pages/Dev";
import Art from "./components/pages/Art";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/art" component={Art} />
            <Route path="/dev" component={Dev} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
