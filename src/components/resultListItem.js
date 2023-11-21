import React from "react";
import { RightOutlined } from "@ant-design/icons";
import "./../styles/resultListItem.css";
import { Link } from "react-router-dom";

const ResultListItem = (props) => {
  const { detail } = props;

  return (
    <div className="result-list-item-container">
      <div className="result-details">
        <Link to={`/explore/${detail.elasticId}`}>
          <h2>{detail.ID}</h2>
        </Link>
        Formula: {detail.pretty_formula}
      </div>
      <div className="icon-container">
        <Link to={`/explore/${detail.elasticId}`}>
          <RightOutlined style={{ fontSize: "20px" }} />
        </Link>
      </div>
    </div>
  );
};

export default ResultListItem;
