import "../../../styles/template2.css";

function Template2({ data }) {
  return (
    <div className="cv-paper template2">

      {/* ===== TOP BLACK HEADER ===== */}
      <div className="t2-header">
        <div className="t2-header-left">
          <h1 contentEditable suppressContentEditableWarning>
            {data?.name || "KAI CARTER"}
          </h1>
          <h3 contentEditable suppressContentEditableWarning>
            {data?.jobTitle || "GENERAL PRACTITIONER"}
          </h3>

          <div className="t2-contact" contentEditable suppressContentEditableWarning>
            <p><strong>PHONE:</strong> {data?.phone || "678-555-0103"}</p>
            <p><strong>EMAIL:</strong> {data?.email || "kai@email.com"}</p>
            <p><strong>WEBSITE:</strong> {data?.website || "www.healthcare.com"}</p>
          </div>
        </div>

        <div className="t2-header-pattern"></div>
      </div>

      {/* ===== BODY ===== */}
      <div className="t2-body">

        {/* LEFT COLUMN */}
        <div className="t2-left" contentEditable suppressContentEditableWarning>

          <h2>PROFILE</h2>
          <p>
            {data?.profile ||
              "Experienced and compassionate GP dedicated to delivering excellent patient care."}
          </p>

          <h2>WORK EXPERIENCE</h2>

          <p><strong>LAMNA HEALTHCARE</strong><br />
          General Practitioner<br />
          20XX – Present</p>

          <p><strong>TYLER STEIND</strong><br />
          Family Physician<br />
          20XX – 20XX</p>

        </div>

        {/* RIGHT COLUMN */}
        <div className="t2-right" contentEditable suppressContentEditableWarning>

          <h2>EDUCATION</h2>
          <p><strong>JASPER UNIVERSITY</strong><br />
          20XX – 20XX</p>

          <h2>SKILLS</h2>
          <ul>
            <li>Clinical diagnosis</li>
            <li>Patient-centered care</li>
            <li>Electronic health records</li>
          </ul>

          <h2>HOBBIES</h2>
          <p>Running, Photography, Traveling</p>

        </div>

      </div>
    </div>
  );
}

export default Template2;
