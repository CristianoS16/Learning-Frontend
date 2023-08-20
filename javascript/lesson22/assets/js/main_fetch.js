document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});

const loadPage = async (el) => {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);
    if (response.status !== 200) throw new Error("Error");
    const html = await response.text();

    loadResults(html);
  } catch (error) {
    console.log(error);
  }
};

const loadResults = (response) => {
  const result = document.querySelector(".result");
  result.innerHTML = response;
};
