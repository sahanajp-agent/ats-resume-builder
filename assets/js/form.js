// Load existing resume data into form on page load
window.onload = () => {
  const data = JSON.parse(localStorage.getItem("resumeData")) || {};

  // Prefill all fields
  Object.keys(data).forEach(key => {
    const field = document.getElementById(key);
    if (field) {
      field.value = data[key];
    }
  });
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

  // Refresh iframe preview
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

// 🔥 LEFT-SIDE SECTION EDIT LOGIC (NO NAVIGATION)
function editLeftSection(sectionId) {
  const field = document.getElementById(sectionId);
  if (!field) return;

  field.focus();
  field.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
