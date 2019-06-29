import React from "react";
import { Link } from "react-router-dom";
import AppShell from "../appShell/AppShell";

const HomePage = () => (
  <AppShell>
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Redux and React Router for ultra-responsive web apps.</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  </AppShell>
);

export default HomePage;
