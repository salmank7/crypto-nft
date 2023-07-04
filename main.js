const toggleBtn = document.querySelector(".toggleMenu");
const links = document.getElementById("links");

toggleBtn.addEventListener("click", (event) => {
  links.classList.toggle("top-[-10rem]");
  links.classList.toggle("top-12");
});

const questionElements = document.querySelectorAll(".faq__question");

questionElements.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    questionElements.forEach((otherQuestion) => {
      const otherAnswer = otherQuestion.nextElementSibling;

      if (otherQuestion !== question) {
        otherQuestion.classList.remove("active");
        otherAnswer.classList.remove("show");
        otherQuestion
          .querySelector("i")
          .classList.replace("fa-minus", "fa-plus");
      }
    });

    question.classList.toggle("active");
    answer.classList.toggle("show");

    const icon = question.querySelector("i");

    if (icon.classList.contains("fa-plus")) {
      icon.classList.replace("fa-plus", "fa-minus");
    } else {
      icon.classList.replace("fa-minus", "fa-plus");
    }
  });
});
