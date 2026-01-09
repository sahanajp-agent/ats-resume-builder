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

  document.getElementById("resumePreview").src =
    document.getElementById("resumePreview").src;
}

function clearResume() {
  localStorage.removeItem("resumeData");
  location.reload();
}
