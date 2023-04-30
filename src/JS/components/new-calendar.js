const sideBar = document.querySelector("#root > aside");

function addNewHabit(calendarNum, calendarTitle) {
  return `
  <!-- Calendar-[${calendarNum}] -->
  <div
  class="sidebar-habit h-14 cursor-pointer items-center justify-center transition duration-300 hover:bg-slate-200 md:flex md:w-14 text-2xl relative group"
  >
  <span class="group-hover:text-slate-950 group-hover:font-bold"
  >${calendarNum}</span
  >
  <!-- Calendar Title  -->
  <div
  class="absolute text-xs h-full w-auto left-14 bg-slate-950 px-2 whitespace-nowrap group-hover:opacity-80 invisible group-hover:visible opacity-0 duration-1000 transition-opacity"
  >
  <div class="h-full w-full flex items-center font-semibold">
  <span class="cal-title">${calendarTitle}</span>
  </div>
  </div>
  </div>
  
  `;
}

//**  SIDEBAR ADD NEW CALENDAR **//

//! NOT READY YET

// Open Close add new habit input container
const addNewHabitPlusSVG = document.querySelector(
  "#root > aside div#add-calendar"
);
const addNewHabitInputContainer = document.querySelector(
  "#root > section#add-calendar-input"
);
const addNewHabitInput = document.querySelector(
  "#root > section#add-calendar-input input"
);
const addNewHabitInputContainerCloseBtn = document.querySelector(
  "#root > section#add-calendar-input button#close-add-new-calendar-btn"
);
const addNewCalendarSaveBtn = document.querySelector(
  "#root > section#add-calendar-input button#add-new-calendar-save-btn"
);
const newHabitsContainerSidebar = document.querySelector(
  "#root > aside div#new-habits-container"
);

addNewHabitPlusSVG.addEventListener("click", () => {
  addNewHabitInputContainer.classList.remove("hidden");
});

addNewHabitInputContainerCloseBtn.addEventListener("click", () => {
  addNewHabitInputContainer.classList.add("hidden");
});

//* Add a new calendar to sidebar *//
let TotalHabitNums = 1;

addNewCalendarSaveBtn.addEventListener("click", () => {
  localStorage.setItem(addNewHabitInput.value, `New Habit`);

  addNewCalendarToSidebar(addNewHabitInput.value);
  addNewHabitInputContainer.classList.add("hidden");

  console.log(addNewHabitInput.value);
  changeCalendarTitle();
  addNewHabitInput.value = "";
});

function addNewCalendarToSidebar(Calendartitle) {
  newHabitsContainerSidebar.innerHTML += addNewHabit(
    TotalHabitNums,
    Calendartitle
  );
  TotalHabitNums++;
}

//** change Calendar title  **//
// change the title when click on any habit in sidebar
const calendarTitle = document.querySelector("#root > header > span");

function changeCalendarTitle() {
  document
    .querySelectorAll("#new-habits-container > div.sidebar-habit")
    .forEach((habit) => {
      habit.addEventListener("click", () => {
        calendarTitle.textContent =
          habit.querySelector("span.cal-title").textContent;
      });
    });
}

changeCalendarTitle();

// Save all New habits in local Storage
// Save theme in Array? in it habit Calendar title

if (!localStorage.getItem("sidebar HABITS")) {
  localStorage.setItem("sidebar HABITS", '["testing1"]');
}

function StoreHabitsToLocalStorage(NewHabitTitle) {
  let habitsLocalStorageArr = JSON.parse(
    localStorage.getItem("sidebar HABITS")
  );
  // let habitsLocalStorageArr = [];
  habitsLocalStorageArr.push(NewHabitTitle);

  localStorage.setItem("sidebar HABITS", JSON.stringify(habitsLocalStorageArr));
}

// Load all habits from local Storage
// DONE
function loadHabitsToSidebar() {
  let habitsLocalStorageArr = JSON.parse(
    localStorage.getItem("sidebar HABITS")
  );
  habitsLocalStorageArr.forEach((habit) => addNewCalendarToSidebar(habit));

  console.log(habitsLocalStorageArr);
}

loadHabitsToSidebar();

// StoreHabitsToLocalStorage("ghsgjsfjxfhhhhhhdj");
