window.onload = () => {
  const data = JSON.parse(localStorage.getItem("resumeData")) || {};

  Object.keys(data).forEach(key => {
    const field = document.getElementById(key);
    if (field) {
      field.value = data[key];
    }
  });
};
function editLeftSection(sectionId) {
  const field = document.getElementById(sectionId);
  if (!field) return;

  field.focus();
  field.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

