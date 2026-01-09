window.onload = () => {
  const data = JSON.parse(localStorage.getItem("resumeData")) || {};

  Object.keys(data).forEach(key => {
    const field = document.getElementById(key);
    if (field) {
      field.value = data[key];
    }
  });
};
