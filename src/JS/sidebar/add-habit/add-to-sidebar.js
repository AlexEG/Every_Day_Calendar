//* add to sidebar
// inside title input container
const Input = document.querySelector("section#add-calendar-input input");
const InputSaveBtn = document.querySelector(
  "#root > section#add-calendar-input button#add-new-calendar-save-btn"
);
// innerHTML new habits
const sidebarHabitsContainer = document.querySelector(
  "#root > aside div#new-habits-container"
);

// //* Add a new calendar to sidebar *//
let TotalHabitNums = 1;

InputSaveBtn.addEventListener("click", () => {
  addNewCalendarToSidebar(Input.value);

  InputContainer.classList.add("hidden");

  changeCalendarTitle();
  Input.value = "";
});

function addNewCalendarToSidebar(Calendartitle) {
  sidebarHabitsContainer.innerHTML += addNewHabit(
    TotalHabitNums,
    Calendartitle
  );
  TotalHabitNums++;
}

sidebarHabitsContainer.innerHTML += addNewHabit(0, "testing");
sidebarHabitsContainer.innerHTML += addNewHabit(0, "testing");
