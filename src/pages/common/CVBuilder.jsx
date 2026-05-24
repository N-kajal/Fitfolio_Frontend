import "../../styles/cvBuilder.css";
import TemplateCard from "../../components/cv/TemplateCard";
import { useNavigate } from "react-router-dom";
import template1Img from "../../images/template1.jpg";
import template2Img from "../../images/template2.jpg";
import template3Img from "../../images/template3.jpg";
import template4Img from "../../images/template4.jpg";
import template5Img from "../../images/template5.jpg";
import template6Img from "../../images/template6.jpg";


const templates = [
   { id: 1, name: "Modern", recommended: true, image: template1Img },
 { id: 2, name: "Professional", recommended: false, image: template2Img },
  { id: 3, name: "Minimal", recommended: true, image: template3Img },
  { id: 4, name: "Corporate", recommended: false, image: template4Img },
  { id: 5, name: "Creative", recommended: false, image: template5Img },
  { id: 6, name: "Tech", recommended: true, image: template6Img },
];

function CVBuilder() {
  const navigate = useNavigate();
  return (
    <>
  {/* NAVBAR */}
  <nav className="cv-navbar">
    <div
  className="logo-text"
  onClick={() => navigate("/")}
>
  Fit<span>Folio</span>
</div>


    <button
  className="cv-back-btn"
  onClick={() => navigate(-1)}
>
  Back
</button>
  </nav>
    
    <div className="cv-gallery-page">
      
      <div className="cv-header">
        <h2>Templates we recommend for you</h2>
        <p>You can always change your template later.</p>
      </div>

      <div className="template-grid">
        {templates.map((tpl) => (
          <TemplateCard key={tpl.id} template={tpl} />
        ))}
      </div>
    </div>
    </>
  );
}

export default CVBuilder;
