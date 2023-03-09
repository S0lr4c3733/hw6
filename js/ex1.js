const bodyNodes = () => {
  const content = document.body.querySelector(".ex1");
  if (!content) return console.error("div not found");
  content.childNodes.forEach((node) => {
    console.log(node);
  });
};

bodyNodes();
