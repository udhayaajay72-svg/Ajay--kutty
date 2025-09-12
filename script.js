// Show section based on clicked nav
const navBoxes = document.querySelectorAll(".nav-box");
const sections = document.querySelectorAll(".section.box");

navBoxes.forEach(box => {
  box.addEventListener("click", () => {
    const target = box.getAttribute("data-section");
    sections.forEach(sec => {
      if(sec.id === target){
        sec.classList.add("active");
      } else {
        sec.classList.remove("active");
      }
    });
  });
});