function downloadPDF() {
  const element = document.getElementById("resumeContent");

  html2pdf().from(element).set({
    filename: "ATS_Resume.pdf",
    jsPDF: { format: "a4", orientation: "portrait" }
  }).save();
}

