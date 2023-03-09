function isValid(nbr) {
  if (nbr == "") return { res: -1, error: true };
  nbr = Number(nbr);
  if (isNaN(nbr) || !Number.isInteger(nbr)) return { res: -1, error: true };
  if (nbr < 0) return { res: -1, error: true };
  return { res: nbr, error: false };
}

function createNode(msg, isError = false) {
  const span = document.createElement("span");
  span.textContent = msg;
  if (isError) span.className = "ex7-error";
  return span;
}

function inputSum(f, s) {
  const content = document.body.querySelector(".ex7");
  if (!content) return console.error("div .ex7 not found");
  const output = content.querySelector("#content");
  if (!output) return console.error("id #content not found");
  const a = isValid(f);
  const b = isValid(s);
  if (a.error || b.error) {
    const c = createNode("Error!", true);
    const d = createNode(` You must enter integers. You entered "${f}" and "${s}". Try again.`);
    output.appendChild(c);
    output.appendChild(d);
  } else {
    const c = createNode(`${a.res} + ${b.res} = `);
    const d = createNode(a.res + b.res, true);
    output.appendChild(c);
    output.appendChild(d);
  }
}

const a = prompt("Fist integer");
const b = prompt("Second integer");

inputSum(a.trim(), b.trim());
