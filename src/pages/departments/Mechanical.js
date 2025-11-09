import React from "react";

function Mechanical() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h2 style={{ marginBottom: 16 }}>Department of Mechanical Engineering</h2>

      <section style={{ marginBottom: 24 }}>
        <table style={{ width: "100%", maxWidth: 900, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", background: "#f7dede", padding: 12, border: "1px solid #d6b4b4" }}>
                Program offered
              </th>
              <th style={{ textAlign: "left", background: "#f7dede", padding: 12, border: "1px solid #d6b4b4" }}>
                B. Tech (Mechanical )
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>Year of Establishment</td>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>1984</td>
            </tr>

            <tr>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>Duration</td>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>4 years</td>
            </tr>

            <tr>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>Intake</td>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>120</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 style={{ marginBottom: 8 }}>Key Highlights of Department</h3>
        <div style={{ border: "1px solid #bfbfbf", padding: 20, maxWidth: 900 }}>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2, color: "#555" }}>
            <li>Conducive environment between faculty members and students.</li>
            <li>Well-equipped laboratories with facilities for basic and advanced experimental works.</li>
            <li>Students are encouraged to work in design and innovation lab for different innovation projects.</li>
            <li>Different competitions and certifications under Student Clubs to ignite creativity and teamwork in students.</li>
            <li>Student forums cover coursework, extracurricular activities, career advice and research work — providing valuable resources for student interaction and learning outside the classroom.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Mechanical;
