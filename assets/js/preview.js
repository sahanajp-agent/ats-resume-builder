const data = JSON.parse(localStorage.getItem("resumeData")) || {};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.innerText = value || "";
  }
}

setText("r-name", data.name);
setText("r-contact", `${data.email || ""} | ${data.phone || ""}`);
setText("r-summary", data.summary);
setText("r-skills", data.skills);
setText("r-experience", data.experience);
setText("r-projects", data.projects);
setText("r-education", data.education);
setText("r-certifications", data.certifications);

function goToEdit() {
  window.location.href = "../form/resume-form.html";
}
