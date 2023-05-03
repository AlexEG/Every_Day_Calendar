const sideBar = document.querySelector("aside");

//* [1] Open/Close input for habit title
const sidebarPlusBtn = document.querySelector("aside div#add-calendar");
const InputContainer = document.querySelector("section#add-calendar-input");
const InputCloseBtn = document.querySelector(
  "section#add-calendar-input button#close-add-new-calendar-btn"
);
//
// open
sidebarPlusBtn.addEventListener("click", () => {
  InputContainer.classList.remove("hidden");
});
// Close
InputCloseBtn.addEventListener("click", () => {
  InputContainer.classList.add("hidden");
});
//* -------------
//
