const displayText400 = () => {
  const content = document.body.querySelector(".ex2");
  if (!content) return console.error("div .ex2 not found");
  const courses = content.querySelectorAll(".iscourses");
  if (!courses) return console.error("div .iscourses not found");
  courses.forEach((course) => {
    const li = course.querySelectorAll("li");
    if (!li) return console.error("li not found");
    li.forEach((e) => {
      if (e.className === "400level") console.log(e.textContent);
    });
  });
};

displayText400();
