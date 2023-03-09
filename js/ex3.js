function change() {
  const content = document.body.querySelector(".ex3");
  if (!content) return console.error("div .ex3 not found");
  const p = content.querySelectorAll("p");
  if (!p) return console.error("p element not found");
  p.forEach((element) => {
    element.style.backgroundColor = "yellow";
    element.style.color = "black";
    element.style.fontWeight = "bold";
  });
}

change();
