import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Nav/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About/About";
import Services from "./components/pages/Services/Services";
import Blog from "./components/pages/Blog/Blog";
import Contact from "./components/pages/Contact/Contact";
import FAQs from './components/pages/FAQs/FAQs';
import Foot from './components/Foot';
import Login from "./components/pages/Login";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/faqs" component={FAQs} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Foot />
    </div>
  </Router>
);

export default App;
