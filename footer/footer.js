fetch("footer/footer.html")
  .then((response) => response.text())
  .then((data) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = data;
    const template = tempDiv.querySelector("template#footer-template");
    if (template) {
      document
        .getElementById("footer")
        .appendChild(template.content.cloneNode(true));
    }
  })
  .catch((error) => console.error(error));
