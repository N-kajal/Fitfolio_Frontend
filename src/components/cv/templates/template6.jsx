import "../../../styles/template6.css";

function Template6({ data }) {
  return (
    <div className="cv-paper template6">

      <div className="t6-container" contentEditable suppressContentEditableWarning>

        {/* NAME */}
        <h1 className="t6-name">
          {data?.name || "DANIELLE BRASSEUR"}
        </h1>

        <p className="t6-contact">
          {data?.contact ||
            "4567 8th Avenue, Carson City, NV 11111 | (315) 555-0100 | danielle@example.com | www.linkedin.com"}
        </p>

        <p className="t6-summary">
          {data?.summary ||
            "Dynamic and detail-oriented accountant with expertise in GAAP and comprehensive public accounting experience. Known for delivering top-notch strategic solutions and fostering business growth through effective collaboration and ownership mentality."}
        </p>

        <hr />

        {/* EDUCATION */}
        <h2>EDUCATION</h2>
        <p>
          <strong>Bachelor of Science in Accounting</strong><br />
          Minor in Business Administration | Bellows College<br />
          Degree obtained June 20XX
        </p>

        <ul>
          <li>Distinguished member of university’s Accounting Society, GPA 3.8</li>
          <li>Relevant coursework: Advanced Financial Accounting and Reporting</li>
        </ul>

        <hr />

        {/* EXPERIENCE */}
        <h2>EXPERIENCE</h2>

        <p>
          <strong>Accountant | Trey Research</strong> | San Francisco, CA<br />
          March 20XX – Present
        </p>

        <ul>
          <li>Provide accounting services for individuals and businesses.</li>
          <li>Specialize in income tax preparation and financial reporting.</li>
          <li>Manage budgeting, general ledger accounting, and bank reconciliation.</li>
        </ul>

        <p>
          <strong>Bookkeeper | Branded Red Estate</strong> | Berkeley, CA<br />
          May 20XX – February 20XX
        </p>

        <ul>
          <li>Maintained financial books and tracked expenses.</li>
          <li>Prepared and submitted invoices.</li>
        </ul>

        <hr />

        {/* SKILLS */}
        <h2>SKILLS</h2>

        <div className="t6-skills">
          <ul>
            <li>Microsoft NAV Dynamics</li>
            <li>Cashflow planning & management</li>
            <li>State & federal tax codes</li>
          </ul>

          <ul>
            <li>Bookkeeping</li>
            <li>Exceptional communication</li>
            <li>Fluent in German</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Template6;
