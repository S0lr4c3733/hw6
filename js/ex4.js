function add() {
  const content = document.body.querySelector(".ex4");
  if (!content) return console.error("div .ex4 not found");
  const links = content.querySelector("#links");
  if (!links) return console.error("id #links not found");
  const liElem = document.createElement("li");
  liElem.id = "cob";
  const aElem = document.createElement("a");
  aElem.href = " https://www.csulb.edu/college-of-business";
  aElem.textContent = "College of Business";
  liElem.appendChild(aElem);
  const [a, b] = links.querySelectorAll("li");
  links.innerHTML = "";
  links.appendChild(a);
  links.appendChild(liElem);
  links.appendChild(b);
}

add();
