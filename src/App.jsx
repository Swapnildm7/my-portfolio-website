// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
