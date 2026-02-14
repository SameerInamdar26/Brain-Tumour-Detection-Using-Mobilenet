import React from "react";

function GradCamViewer({ gradcamUrl }) {
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
      <h3>Grad-CAM Visualization</h3>

      {gradcamUrl ? (
        <>
          <img
            src={gradcamUrl}
            alt="Grad-CAM"
            style={{
              marginTop: "12px",
              width: "100%",
              maxHeight: "320px",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />

          <a
            href={gradcamUrl}
            download="gradcam.png"
            style={{
              display: "inline-block",
              marginTop: "12px",
              padding: "10px 16px",
              background: "#16a34a",
              color: "#ffffff",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Download Grad-CAM
          </a>
        </>
      ) : (
        <p>No Grad-CAM generated yet.</p>
      )}
    </div>
  );
}

export default GradCamViewer;