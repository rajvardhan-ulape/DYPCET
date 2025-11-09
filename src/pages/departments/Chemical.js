import React from "react";

function Chemical() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h2 style={{ marginBottom: 16 }}>Department of Chemical Engineering</h2>

      <section style={{ marginBottom: 24 }}>
        <table style={{ width: "100%", maxWidth: 900, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", background: "#f7dede", padding: 12, border: "1px solid #d6b4b4" }}>
                Program offered
              </th>
              <th style={{ textAlign: "left", background: "#f7dede", padding: 12, border: "1px solid #d6b4b4" }}>
                B. Tech (Chemical Engineering)
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>Year of Establishment</td>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>1997</td>
            </tr>

            <tr>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>Duration</td>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>4 years</td>
            </tr>

            <tr>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>Intake</td>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>60</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 style={{ marginBottom: 8 }}>Key Highlights of Department</h3>
        <div style={{ border: "1px solid #bfbfbf", padding: 20, maxWidth: 900 }}>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2, color: "#555" }}>
            <li>Industry Based Curriculum</li>
            <li>100% Placement Record</li>
            <li>Strong Industry–Institute Interaction</li>
            <li>Research and Industry Problem Based Projects for the Students & Faculty</li>
            <li>Strong Alumni Network</li>
            <li>Special Training on Advanced Industrial Software's</li>
            <li>Various Clubs for Preparation of GATE Examination & Higher Education</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Chemical;
