import { useParams, useNavigate } from "react-router-dom";
import TemplatePreview from "../../components/cv/TemplatePreview";

import "../../styles/template.css";

function CVEditor() {
  const { templateId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="cv-editor-page">

      {/* NAVBAR */}
      <div className="cv-editor-navbar">
        <div className="nav-left">
          <div
  className="logo-text"
  onClick={() => navigate("/")}
>
  Fit<span>Folio</span>
</div>


        </div>

        <div className="nav-right">
          <button
            className="editor-btn back-btn"
            onClick={() => navigate(-1)}
          >
            Back
          </button>

          <button
            className="editor-btn download-btn"
            onClick={() => window.print()}
          >
            Download
          </button>
        </div>
      </div>

      {}
      <div className="cv-editor-body">
        <div className="cv-preview-wrapper">
          <TemplatePreview template={Number(templateId)} />
        </div>
      </div>

    </div>
  );
}


export default CVEditor;
