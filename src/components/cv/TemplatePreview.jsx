import Template1 from "./templates/template1";
import Template2 from "./templates/template2";
import Template3 from "./templates/template3";
import Template4 from "./templates/template4";
import Template5 from "./templates/template5";
import Template6 from "./templates/template6";

const TemplatePreview = ({ template, cvData }) => {
  const renderTemplate = () => {
    switch (template) {
      case 1: return <Template1 data={cvData} />;
      case 2: return <Template2 data={cvData} />;
      case 3: return <Template3 data={cvData} />;
      case 4: return <Template4 data={cvData} />;
      case 5: return <Template5 data={cvData} />;
      case 6: return <Template6 data={cvData} />;
      default: return <Template1 data={cvData} />;
    }
  };

  return (
    <div className="cv-preview">
      {renderTemplate()}
    </div>
  );
};

export default TemplatePreview;
