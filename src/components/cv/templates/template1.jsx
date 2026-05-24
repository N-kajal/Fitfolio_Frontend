import "../../../styles/template1.css";

function Template1({ data = {} }) {
  return (
      <div className="cv-paper">
    <div className="template1">

      {/* HEADER */}
<div className="t1-header">

  <div className="t1-profile-wrapper">
    <img
      src={data.profileImage || "/templates/template1.jpg"}
      alt="Profile"
      className="t1-profile-img"
    />
  </div>

  <div className="t1-header-text">
    <h2 contentEditable suppressContentEditableWarning>
      {data.firstName || "First Name"}
    </h2>

    <h1 contentEditable suppressContentEditableWarning>
      {data.lastName || "Last Name"}
    </h1>
  </div>

</div>


      <div
        className="t1-job-title"
        contentEditable
        suppressContentEditableWarning
      >
        {data.jobTitle || "JOB TITLE"}
      </div>

      <div className="t1-body">

        {/* LEFT SIDE */}
        <div className="t1-left">

          <div className="t1-section">
            <h3>CONTACT</h3>

            <p contentEditable suppressContentEditableWarning>
              {data.email || "your@email.com"}
            </p>

            <p contentEditable suppressContentEditableWarning>
              {data.phone || "0000000000"}
            </p>

            <p contentEditable suppressContentEditableWarning>
              {data.location || "Your Location"}
            </p>

            <p contentEditable suppressContentEditableWarning>
              {data.linkedin || "linkedin/username"}
            </p>
          </div>

          <div className="t1-section">
            <h3>PROFILE SUMMARY</h3>

            <p contentEditable suppressContentEditableWarning>
              {data.summary ||
                "Write your professional summary here..."}
            </p>
          </div>

          <div className="t1-section">
            <h3>SKILLS</h3>
            <ul>
              <li contentEditable suppressContentEditableWarning>✔ Skill 1</li>
              <li contentEditable suppressContentEditableWarning>✔ Skill 2</li>
              <li contentEditable suppressContentEditableWarning>✔ Skill 3</li>
              <li contentEditable suppressContentEditableWarning>✔ Skill 4</li>
            </ul>
          </div>

          <div className="t1-section">
            <h3>LANGUAGES</h3>
            <ul>
              <li contentEditable suppressContentEditableWarning>✔ Language 1</li>
              <li contentEditable suppressContentEditableWarning>✔ Language 2</li>
            </ul>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="t1-right">

          <div className="t1-section">
            <h3>PROFESSIONAL EXPERIENCE</h3>

            <div className="t1-exp">
              <h4 contentEditable suppressContentEditableWarning>
                Company Name
              </h4>

              <p contentEditable suppressContentEditableWarning>
                Job Role
              </p>

              <ul>
                <li contentEditable suppressContentEditableWarning>
                  Responsibility 1
                </li>
                <li contentEditable suppressContentEditableWarning>
                  Responsibility 2
                </li>
              </ul>
            </div>
          </div>

          <div className="t1-section">
            <h3>EDUCATION</h3>

            <div className="t1-edu">
              <h4 contentEditable suppressContentEditableWarning>
                Degree Name
              </h4>

              <p contentEditable suppressContentEditableWarning>
                University | Year
              </p>
            </div>

            <div className="t1-edu">
              <h4 contentEditable suppressContentEditableWarning>
                Degree Name
              </h4>

              <p contentEditable suppressContentEditableWarning>
                University | Year
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
    </div>
  );
}

export default Template1;
