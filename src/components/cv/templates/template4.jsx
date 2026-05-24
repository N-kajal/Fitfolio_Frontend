import "../../../styles/template4.css";

function Template4({ data }) {
  return (
    <div className="cv-paper template4">

      {/* ===== HEADER ===== */}
      <div className="t4-header">
        <h1 contentEditable suppressContentEditableWarning>
          {data?.name || "James Dow"}
        </h1>

        <p contentEditable suppressContentEditableWarning>
          {data?.jobTitle || "DIGITAL MARKETER"}
        </p>
      </div>

      {/* ===== BODY ===== */}
      <div className="t4-body">

        {/* LEFT COLUMN */}
        <div className="t4-left" contentEditable suppressContentEditableWarning>

          <h2>CONTACT</h2>
          <p>
            {data?.phone || "000-000-0000"} <br />
            {data?.email || "email@email.com"} <br />
            {data?.location || "Your Location"}
          </p>

          <h2>SKILLS</h2>
          <ul>
            <li>Brand Strategy</li>
            <li>Social Media Marketing</li>
            <li>SEO Optimization</li>
            <li>Analytics</li>
          </ul>

          <h2>AWARDS</h2>
          <p>
            Best Digital Campaign – 2022 <br />
            Marketing Excellence Award
          </p>

        </div>

        {/* RIGHT COLUMN */}
        <div className="t4-right" contentEditable suppressContentEditableWarning>

          <h2>WORK EXPERIENCE</h2>
          <p>
            <strong>Marketing Manager</strong><br />
            ABC Company – 2020 to Present<br />
            Led digital campaigns and managed marketing team.
          </p>

          <p>
            <strong>Digital Strategist</strong><br />
            XYZ Agency – 2017 to 2020<br />
            Developed SEO and paid advertising strategies.
          </p>

          <h2>EDUCATION</h2>
          <p>
            Bachelor of Business Administration<br />
            University Name – 2013 to 2017
          </p>

        </div>

      </div>

    </div>
  );
}

export default Template4;
