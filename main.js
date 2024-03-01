// Elements
const title = document.querySelector(".title");
const currentYear = document.querySelector(".current-year");
const form = document.querySelector(".form");
const result = document.querySelector(".result");

// Function check leap year
const checkLeapYear = (year) =>
  year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

// Event Listeners
currentYear.addEventListener("click", () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const isLeapYear = checkLeapYear(currentYear);

  if (isLeapYear) {
    title.classList.remove("text--negative");
    result.classList.remove("result--negative");

    title.classList.add("text--active");
    result.textContent = `📅 ${currentYear} é ano bissexto!📅`;
    result.classList.add("result--active");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const yearText = formData.get("form__year");
  const year = Number(yearText);

  if (isNaN(year)) {
    alert("Campo invalido! Somente números inteiros.");
    form.reset();
    event.target[0].focus();

    return;
  }

  const isLeapYear = checkLeapYear(year);
  if (isLeapYear) {
    title.classList.remove("text--negative");
    result.classList.remove("result--negative");

    title.classList.add("text--active");
    result.textContent = `📅 ${year} é ano bissexto!📅`;
    result.classList.add("result--active");
  } else {
    title.classList.add("text--negative");
    result.textContent = `📅 ${year} não é ano bissexto!📅`;
    result.classList.add("result--negative");
  }
});
