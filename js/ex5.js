function createNode(num) {
  const tr = document.createElement("tr");
  if (num % 4 === 0) tr.className = "even";
  const td = document.createElement("td");
  td.textContent = num;
  tr.appendChild(td);
  return tr;
}

function populate() {
  const content = document.body.querySelector(".ex5");
  if (!content) return console.error("div .ex5 not found");
  const output = content.querySelector("#output");
  if (!output) return console.error("id #output not found");
  const table = document.createElement("table");
  for (let idx = 1; idx <= 12; idx += 1) {
    const node = createNode(idx);
    table.appendChild(node);
  }
  output.innerHTML = "";
  output.appendChild(table);
}

populate();
