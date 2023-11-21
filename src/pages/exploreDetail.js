import React, { useEffect, useState } from "react";
import "./../styles/exploreDetail.css";
import { useParams } from "react-router-dom";
import { getDetail } from "../utils/apiCalls";
import { Button } from "antd";

const ExploreDetail = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getDetail(id)
      .then((res) => {
        setDetails(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const downloadData = () => {
    const jsonString = JSON.stringify(details, null, 2);

    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "details.json";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const {
    ID,
    pretty_formula,
    energy_above_hull,
    space_group,
    band_gap,
    predicted_formation_energy,
    magnetic_ordering,
    total_magnetization,
    experimentally_observed,
    reference,
  } = details;

  return (
    <div className="explore-detail-page">
      <div className="explore-detail-container">
        <h2>{ID}</h2>
        <div className="detail-item">
          <span className="detail-label">Pretty Formula:</span>
          <span className="detail-value">{pretty_formula}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Energy Above Hull:</span>
          <span className="detail-value">{energy_above_hull}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Space Group:</span>
          <span className="detail-value">{space_group}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Band Gap:</span>
          <span className="detail-value">{band_gap}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Predicted Formation Energy:</span>
          <span className="detail-value">{predicted_formation_energy}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Magnetic Ordering:</span>
          <span className="detail-value">{magnetic_ordering}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Total Magnetization:</span>
          <span className="detail-value">{total_magnetization}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Experimentally Observed:</span>
          <span className="detail-value">{experimentally_observed}</span>
        </div>
        {reference && (
          <div className="detail-item">
            <span className="detail-label">References:</span>
            {reference.map((x, i) => (
              <ul key={i}>
                {i + 1}:
                {Object.entries(x).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
            ))}
            {/* <span className="detail-value">{JSON.stringify(reference)}</span> */}
          </div>
        )}
        <div className="download-div">
          <Button
            onClick={downloadData}
            type="primary"
            className="download-button"
          >
            Download Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetail;
