import React from "react";

function ComputerScience() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h2 style={{ marginBottom: 16 }}>Department of Computer Science & Engineering</h2>

      <section style={{ marginBottom: 24 }}>
        <table style={{ width: "100%", maxWidth: 900, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", background: "#f7dede", padding: 12, border: "1px solid #d6b4b4" }}>
                Program offered
              </th>
              <th style={{ textAlign: "left", background: "#f7dede", padding: 12, border: "1px solid #d6b4b4" }}>
                B. Tech (Computer Science & Engineering)
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
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>240</td>
            </tr>

            <tr>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>Accreditation Status</td>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>Accredited by NBA</td>
            </tr>

            <tr>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>Accreditation Status</td>
              <td style={{ padding: 12, border: "1px solid #e8e8e8" }}>NAAC Accredited 'A'</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 style={{ marginBottom: 8 }}>Key Highlights of Department</h3>
        <div style={{ border: "1px solid #bfbfbf", padding: 20, maxWidth: 900 }}>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2, color: "#555" }}>
            <li>
              The department of Computer Science & Engineering is the first department amongst all established institutes in the
              Western Maharashtra.
            </li>
            <li>
              The department has state-of-the-art laboratories, latest computer systems, open-source software, modern digital
              teaching aids, AR‑VR kits, IoT kits, private cloud service, AI server, CISCO and research center technology specific
              laboratories.
            </li>
            <li>The teaching faculty is a blend of highly qualified, experienced, dynamic and young professionals.</li>
            <li>
              The program emphasizes industry based cutting edge technologies including various CSE tracks like Software
              Engineering, Database Engineering, Networking, AI & ML, Data Science, Blockchain Technology, etc.
            </li>
            <li>Students' projects are based on real time problem statements related to society, industry etc.</li>
            <li>
              This branch has lots of job opportunities, high salary packages, entrepreneurship development and higher education
              opportunities.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ComputerScience;
