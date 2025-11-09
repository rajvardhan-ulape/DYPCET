import React from "react";
import banner from "./architecture-banner.jpg";

function Architecture() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Architecture Department</h2>
      <p>Welcome to the Architecture Department. Showcase projects, faculty, and facilities here.</p>

      {/* added banner image */}
      <img
        src={banner}
        alt="Architecture department banner"
        style={{
          width: "100%",
          maxWidth: 1200,
          height: "auto",
          display: "block",
          margin: "24px auto",
          borderRadius: 6,
        }}
      />
    </div>
  );
}

export default Architecture;
