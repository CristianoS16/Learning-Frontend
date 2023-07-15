function app() {
  const bodyStyle = getComputedStyle(document.body);
  const backgroundColorBody = bodyStyle.backgroundColor;

  const paragraphs = document.querySelector(".paragraph");
  const ps = paragraphs.querySelectorAll("p");

  ps.forEach((p) => {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "#FFFFFF";
  });
}

app();
