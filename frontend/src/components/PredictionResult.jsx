import React from "react";

function PredictionResult({ result }) {
  if (!result) {
    return (
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          height: "100%",
        }}
      >
        <h3>Prediction Result</h3>
        <p>No prediction yet.</p>
      </div>
    );
  }

  const label = result.label || result.prediction || "Unknown";
  const confidence = result.confidence;
  const tumorType =
    result.tumor_type ||
    result.type ||
    result.class_name ||
    result.class ||
    null;

  const isTumor = label.toLowerCase().includes("tumor");

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        height: "100%",
      }}
    >
      <h3>Prediction Result</h3>

      <p style={{ fontSize: "18px", fontWeight: 600 }}>
        Status:{" "}
        <span style={{ color: isTumor ? "#dc2626" : "#16a34a" }}>
          {label}
        </span>
      </p>

      {tumorType && isTumor && (
        <p style={{ marginTop: "6px" }}>
          Tumor Type: <strong>{tumorType}</strong>
        </p>
      )}

      {confidence !== undefined && (
        <p style={{ marginTop: "6px", color: "#64748b" }}>
          Confidence: {(confidence * 100).toFixed(2)}%
        </p>
      )}
    </div>
  );
}

export default PredictionResult;