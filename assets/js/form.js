function saveResume() {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    summary: document.getElementById("summary").value
  };

  localStorage.setItem("resumeData", JSON.stringify(data));

  alert("Resume data saved!");
}

