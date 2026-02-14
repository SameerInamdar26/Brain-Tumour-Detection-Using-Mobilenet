import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #020617 0%, #0f172a 50%, #020617 100%)",
        color: "#ffffff",
        padding: "14px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "22px" }}>🧠</span>
        <h2
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: 700,
            color: "#e5e7eb",
            textShadow: "0 1px 2px rgba(0,0,0,0.6)",
            letterSpacing: "0.3px",
          }}
        >
          Brain Tumor Detection
        </h2>
      </div>

      <span
        style={{
          fontSize: "13px",
          opacity: 0.9,
          color: "#e5e7eb",
          textShadow: "0 1px 2px rgba(0,0,0,0.6)",
        }}
      >
        MRI Analysis • Grad-CAM
      </span>
    </nav>
  );
}

export default Navbar;