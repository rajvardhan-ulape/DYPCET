import React from "react";

function Civil() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h2 style={{ marginBottom: 16 }}>B. Tech (Civil Engineering)</h2>

      <section style={{ marginBottom: 24 }}>
        <table style={{ width: "100%", maxWidth: 900, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", background: "#f7dede", padding: 12, border: "1px solid #d9534f" }}>
                Program offered
              </th>
              <th style={{ textAlign: "left", background: "#f7dede", padding: 12, border: "1px solid #d9534f" }}>
                B. Tech (Civil Engineering)
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>Year of Establishment</td>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>1985</td>
            </tr>

            <tr>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>Duration</td>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>4 years</td>
            </tr>

            <tr>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>Intake</td>
              <td style={{ padding: 12, border: "1px solid #d9534f" }}>120</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 style={{ marginBottom: 8 }}>Key Highlights of Department</h3>
        <div style={{ border: "1px solid #bfbfbf", padding: 20, maxWidth: 900 }}>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2, color: "#555" }}>
            <li>34 Batches Passed till date.</li>
            <li>Qualified and Experienced Teaching Staff with advanced skills.</li>
            <li>Well Equipped Lab for performance based learning.</li>
            <li>Distinguished and Strongest Alumni Network in the region.</li>
            <li>Remarkable Consultancy from different organizations.</li>
            <li>Departmental Library with desired book volumes.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Civil;
