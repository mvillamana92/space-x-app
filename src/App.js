import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppNav from "./components/AppNav";
import BodyRoutes from "./components/BodyRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <AppNav />
          <BodyRoutes />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
