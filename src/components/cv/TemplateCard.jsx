import { useNavigate } from "react-router-dom";

function TemplateCard({ template }) {
  const navigate = useNavigate();

  return (
    <div className="template-card">
      {template.recommended && (
        <span className="recommended-badge">Recommended</span>
      )}

      {/* Dummy preview */}
      <div className="template-preview">
  {template.image ? (
    <img
      src={template.image}
      alt={template.name}
      className="template-preview-img"
    />
  ) : (
    <p>{template.name} Template</p>
  )}
</div>


      <button
        className="choose-template-btn"
        onClick={() => navigate(`/user/cv/editor/${template.id}`)}
      >
        Choose template
      </button>
    </div>
  );
}

export default TemplateCard;
