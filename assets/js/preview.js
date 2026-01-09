const data = JSON.parse(localStorage.getItem("resumeData")) || {};

document.getElementById("r-name").innerText = data.name || "";
document.getElementById("r-contact").innerText =
  `${data.email || ""} | ${data.phone || ""}`;

document.getElementById("r-summary").innerText = data.summary || "";
document.getElementById("r-skills").innerText = data.skills || "";
document.getElementById("r-experience").innerText = data.experience || "";
document.getElementById("r-projects").innerText = data.projects || "";
document.getElementById("r-education").innerText = data.education || "";
document.getElementById("r-certifications").innerText = data.certifications || "";

function goToEdit() {
  window.location.href = "../form/resume-form.html";
}
