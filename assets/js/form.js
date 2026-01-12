// Load existing resume data into form on page load
window.onload = () => {
  const data = JSON.parse(localStorage.getItem("resumeData")) || {};

  Object.keys(data).forEach(key => {
    const field = document.getElementById(key);
    if (field) {
      field.value = data[key];
    }
  });

  attachLivePreview();
};

// Attach live preview listeners
function attachLivePreview() {
  const fields = [
    "name",
    "email",
    "phone",
    "summary",
    "skills",
    "experience",
    "projects",
    "education",
    "certifications"
  ];

  fields.forEach(id => {
    const field = document.getElementById(id);
    if (!field) return;

    field.addEventListener("input", saveLive);
  });
}

// Save on every input (LIVE)
function saveLive() {
  const resumeData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    summary: summary.value,
    skills: skills.value,
    experience: experience.value,
    projects: projects.value,
    education: education.value,
    certifications: certifications.value
  };

  localStorage.setItem("resumeData", JSON.stringify(resumeData));

  // Refresh preview iframe silently
  const iframe = document.getElementById("resumePreview");
  if (iframe) {
    iframe.src = iframe.src;
  }
}

// Clear resume data
function clearResume() {
  localStorage.removeItem("resumeData");
  location.reload();
}

// Left-side section edit (scroll + focus)
function editLeftSection(sectionId) {
  const field = document.getElementById(sectionId);
  if (!field) return;

  field.focus();
  field.scrollIntoView({ behavior: "smooth", block: "center" });
}
