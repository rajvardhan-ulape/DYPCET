import React from "react";

function Electrical() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h2 style={{ marginBottom: 16 }}>B. Tech (Electronics & Telecommunication Engineering)</h2>

      <section style={{ marginBottom: 24 }}>
        <table style={{ width: "100%", maxWidth: 900, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", background: "#f7dede", padding: 12, border: "1px solid #d9534f" }}>
                Program offered
              </th>
              <th style={{ textAlign: "left", background: "#f7dede", padding: 12, border: "1px solid #d9534f" }}>
                B. Tech (Electronics & Telecommunication Engineering )
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>Duration</td>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>4 years</td>
            </tr>

            <tr>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>Intake</td>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>60</td>
            </tr>

            <tr>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>Year of Establishment</td>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>1984</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 style={{ marginBottom: 8 }}>Key Highlights of Department</h3>
        <div style={{ border: "1px solid #bfbfbf", padding: 20, maxWidth: 900 }}>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2, color: "#555" }}>
            <li>Number of Ph. Ds in the department: <strong>04</strong></li>
            <li>Number of Ph. D. per suing faculties: <strong>03</strong></li>
            <li>Number of Ph. D. guides in department: <strong>02</strong></li>
            <li>
              Number of Ph. D. students guided by:
              <div style={{ marginTop: 8, paddingLeft: 20 }}>
                <div style={{ display: "inline-block", width: "33%", verticalAlign: "top" }}>a) Dr. S. D. Chede: <strong>08</strong></div>
                <div style={{ display: "inline-block", width: "33%", verticalAlign: "top" }}>b) Dr. S. V. Sankpal: <strong>06</strong></div>
                <div style={{ display: "inline-block", width: "33%", verticalAlign: "top" }}>c) Dr. T. B. Mohite-Patil: <strong>04</strong></div>
              </div>
            </li>
            <li>Number of Ph. D. candidates registered at this centre: <strong>12</strong></li>
            <li>Number Of Publications Of department: <strong>560</strong></li>
            <li>Number of patents filed by faculties from this department: <strong>23</strong></li>
            <li>Patents filed by students: <strong>02</strong></li>
            <li>Number of PG students passed: <strong>100</strong></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Electrical;
