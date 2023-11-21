import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./../styles/home.css";

const Home = () => {
  return (
    <div className="page-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Material Explorer</h1>
        <p>
          Harnessing the power of supercomputing and state-of-the-art methods,
          the Materials Project provides open web-based access to computed
          information on known and predicted materials as well as powerful
          analysis tools to inspire and design novel materials.
        </p>
        <Link to="/explore">
          <Button className="button" type="text">
            Explore Materials
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
