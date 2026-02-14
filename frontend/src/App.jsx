import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import PredictionResult from "./components/PredictionResult";
import GradCamViewer from "./components/GradCamViewer";
import Spinner from "./components/Spinner";

function App() {
  const [result, setResult] = useState(null);
  const [gradcamUrl, setGradcamUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#f4f7fb" }}>
      <Navbar />

      <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
        <UploadForm
          onResult={setResult}
          onGradCam={setGradcamUrl}
          setLoading={setLoading}
        />

        {loading && <Spinner />}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <PredictionResult result={result} />
          <GradCamViewer gradcamUrl={gradcamUrl} />
        </div>
      </div>
    </div>
  );
}

export default App;