function saveResume() {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    summary: document.getElementById("summary").value
  };

  localStorage.setItem("resumeData", JSON.stringify(data));
  // Reload iframe to reflect changes
  const iframe = document.getElementById("resumePreview");
  iframe.src = iframe.src;

  alert("Resume data saved & preview updated!");

}

