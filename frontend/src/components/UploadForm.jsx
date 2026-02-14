import React, { useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:10000";

function UploadForm({ onResult, onGradCam, setLoading }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setError(null);
  };

  const generateGradCam = async (f) => {
    const formData = new FormData();
    formData.append("image", f);

    const res = await axios.post(`${API_BASE}/gradcam`, formData, {
      responseType: "blob",
    });
    return URL.createObjectURL(res.data);
  };

  const handlePredict = async () => {
    if (!file) return setError("Please select an MRI image");
    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading && setLoading(true);

      const res = await axios.post(`${API_BASE}/predict`, formData);
      onResult && onResult(res.data);

      try {
        const imgUrl = await generateGradCam(file);
        onGradCam && onGradCam(imgUrl);
      } catch (e) {
        console.warn("Grad-CAM auto generation failed");
      }
    } catch (err) {
      console.error(err);
      setError("Prediction failed. Please try again.");
    } finally {
      setLoading && setLoading(false);
    }
  };

  return (
    <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
      <h3>Select an MRI image to analyze</h3>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      {preview && (
        <img src={preview} alt="Preview" style={{ width: "180px", marginTop: "12px", borderRadius: "10px" }} />
      )}

      {error && <p style={{ color: "#dc2626", marginTop: "10px" }}>{error}</p>}

      <div style={{ marginTop: "14px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={handlePredict}>Detect & Generate Grad-CAM</button>
      </div>
    </div>
  );
}

export default UploadForm;