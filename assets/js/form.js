// Read section from URL (for section-wise edit)
const params = new URLSearchParams(window.location.search);
const activeSection = params.get("section");

// Load existing resume data into form on page load
window.onload = () => {
  const data = JSON.parse(localStorage.getItem("resumeData")) || {};

  // Prefill inputs
  Object.keys(data).forEach(key => {
    const field = document.getElementById(key);
    if (field) {
      field.value = data[key];
    }
  });

  // Focus and scroll to the section user wants to edit
  if (activeSection) {
    const targetField = document.getElementById(activeSection);
    if (targetField) {
      targetField.focus();
      targetField.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
};

// Save resume and refresh preview
function saveResume() {
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

  // Refresh iframe preview safely
  const iframe = document.getElementById("resumePreview");
  if (iframe) {
    iframe.src = iframe.src;
  }
}

// Clear resume data completely
function clearResume() {
  localStorage.removeItem("resumeData");
  location.reload();
}
