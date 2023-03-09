const words = [
  {
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished",
  },
  {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable",
  },
  {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory",
  },
];

function createNode(elem, word, title = false) {
  const dt = document.createElement(elem);
  if (title) {
    const str = document.createElement("strong");
    str.textContent = word;
    dt.appendChild(str);
  } else dt.textContent = word;
  // const dd = document.createElement("dd");
  // dd.textContent = word.definition;
  // dt.appendChild(dd);
  return dt;
}

function populate() {
  const content = document.body.querySelector(".ex6");
  if (!content) return console.error("div .ex6 not found");
  const output = content.querySelector("#content");
  if (!output) return console.error("id #content not found");
  const dl = document.createElement("dl");
  words.forEach((word) => {
    const dt = createNode("dt", word.term, true);
    const dd = createNode("dd", word.definition);
    dl.append(dt);
    dl.append(dd);
  });
  output.innerHTML = "";
  output.appendChild(dl);
}

populate();
