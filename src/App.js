import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          {/* <Switch> */}
          <Redirect exact from="/scott-portfolio/" to="/scott-portfolio/about" />
          <Route exact path="/scott-portfolio/" component={About} />
          <Route exact path="/scott-portfolio/about" component={About} />
          <Route exact path="/scott-portfolio/portfolio" component={Portfolio} />
          <Route exact path="/scott-portfolio/contact" component={Contact} />
          {/* </Switch> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;