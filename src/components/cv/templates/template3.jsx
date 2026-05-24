import { useState } from "react";
import "../../../styles/template3.css";

function Template3({ data }) {
  const [image, setImage] = useState(data?.profileImage || null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="cv-paper template3">

      {/* ===== HEADER ===== */}
      <div className="t3-header">

        <div className="t3-header-left">
          <h1 contentEditable suppressContentEditableWarning>
            {data?.firstName || "Joshua"}
          </h1>

          <h2 contentEditable suppressContentEditableWarning>
            {data?.lastName || "Freedman"}
          </h2>

          <p className="t3-role" contentEditable suppressContentEditableWarning>
            {data?.jobTitle || "Creative Web Developer"}
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="t3-header-right">
          {image ? (
            <>
              <div className="t3-img-circle">
                <img src={image} alt="profile" />
              </div>
              <button className="remove-photo" onClick={removeImage}>
                Remove
              </button>
            </>
          ) : (
            <label className="upload-btn">
              Add Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                hidden
              />
            </label>
          )}
        </div>

      </div>

      {/* ===== BODY ===== */}
      <div className="t3-body">

        <div className="t3-left" contentEditable suppressContentEditableWarning>
          <h3>Education & Experience</h3>
          <p>
            {data?.experience ||
              "Company Name – Job Role\nUniversity – Degree"}
          </p>

          <h3>Achievements</h3>
          <p>
            {data?.achievements ||
              "Award 1\nAward 2"}
          </p>
        </div>

        <div className="t3-right" contentEditable suppressContentEditableWarning>
          <h3>Working Approach</h3>
          <p>
            {data?.approach ||
              "Describe your professional working approach here."}
          </p>

          <h3>Outside the Office</h3>
          <p>
            {data?.hobbies ||
              "Hobbies, interests, volunteering, etc."}
          </p>
        </div>

      </div>

    </div>
  );
}

export default Template3;
