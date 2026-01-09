const data = JSON.parse(localStorage.getItem("resumeData"));

if (data) {
  document.getElementById("r-name").innerText = data.name;
  document.getElementById("r-contact").innerText =
    `${data.email} | ${data.phone}`;
  document.getElementById("r-summary").innerText = data.summary;
}

