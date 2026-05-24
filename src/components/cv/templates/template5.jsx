import "../../../styles/template5.css";

function Template5({ data }) {
  return (
    <div className="cv-paper template5">

      {/* ===== TOP SECTION ===== */}
      <div className="t5-top">

        

        {/* RIGHT HEADER */}
        <div className="t5-header" contentEditable suppressContentEditableWarning>

          <h1>
            {data?.name || "CHRISTEN MILLER"}
          </h1>

          <p>
            {data?.address || "2420 Gale Avenue, Sunderland SA487"} <br />
            {data?.phone || "phone: +01 12345 555"} <br />
            {data?.email || "email: contact@yourdomain.com"}
          </p>

        </div>

      </div>

      {/* ===== BODY ===== */}
      <div className="t5-body">

        {/* LEFT COLUMN */}
        <div className="t5-left" contentEditable suppressContentEditableWarning>

          <h2>ABOUT ME</h2>
          <p>
            {data?.about ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </p>

          <h2>SKILLS</h2>
          <ul>
            <li>Graphic Design</li>
            <li>Web Development</li>
            <li>Brand Strategy</li>
            <li>Content Creation</li>
          </ul>

        </div>

        {/* RIGHT COLUMN */}
        <div className="t5-right" contentEditable suppressContentEditableWarning>

          <h2>EXPERIENCE</h2>

          <p>
            <strong>Sales Representative (2006 - Now)</strong><br />
            Company Name – Description of your role.
          </p>

          <p>
            <strong>Sales Manager (2003 - 2006)</strong><br />
            Company Name – Description of your role.
          </p>

          <h2>EDUCATION</h2>

          <p>
            <strong>High School of Design (1996 - 1999)</strong><br />
            Description of study.
          </p>

          <p>
            <strong>School (1994 - 1996)</strong><br />
            Description of study.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Template5;
