let resumeData = JSON.parse(localStorage.getItem("resumeData")) || {};

// Fill preview
function renderResume() {
  document.getElementById("r-contact").innerText =
    `${resumeData.email || ""} | ${resumeData.phone || ""}`;

  set("r-summary", resumeData.summary);
  set("r-skills", resumeData.skills);
  set("r-experience", resumeData.experience);
  set("r-projects", resumeData.projects);
  set("r-education", resumeData.education);
  set("r-certifications", resumeData.certifications);
}

function set(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerText = value || "";
}

// Enable inline edit
function enableEdit(key) {
  const el = document.querySelector(`[data-key="${key}"]`);
  if (!el) return;

  el.contentEditable = "true";
  el.focus();

  el.onblur = () => {
    el.contentEditable = "false";
    resumeData[key] = el.innerText;
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    syncForm(key);
  };
}

// Sync left form when preview edits change
function syncForm(key) {
  const iframe = parent.document.getElementById("resumePreview");
  if (!iframe) return;

  const formField = parent.document.getElementById(key);
  if (formField) {
    formField.value = resumeData[key];
  }
}

// Initial render
renderResume();
