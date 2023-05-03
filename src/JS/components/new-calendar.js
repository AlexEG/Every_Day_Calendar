// //**  SIDEBAR ADD NEW CALENDAR **//

// //! NOT READY YET

// // Open Close add new habit input container

// //* Add a new calendar to sidebar *//
// let TotalHabitNums = 1;

// addNewCalendarSaveBtn.addEventListener("click", () => {
//   localStorage.setItem(addNewHabitInput.value, `New Habit`);

//   addNewCalendarToSidebar(addNewHabitInput.value);
//   addNewHabitInputContainer.classList.add("hidden");

//   // console.log(addNewHabitInput.value);
//   changeCalendarTitle();
//   addNewHabitInput.value = "";
// });

// function addNewCalendarToSidebar(Calendartitle) {
//   newHabitsContainerSidebar.innerHTML += addNewHabit(
//     TotalHabitNums,
//     Calendartitle
//   );
//   TotalHabitNums++;
// }

// //** change Calendar title  **//
// // change the title when click on any habit in sidebar
// const calendarTitle = document.querySelector("#root > header > span");

// function changeCalendarTitle() {
//   document
//     .querySelectorAll("#new-habits-container > div.sidebar-habit")
//     .forEach((habit) => {
//       habit.addEventListener("click", () => {
//         calendarTitle.textContent =
//           habit.querySelector("span.cal-title").textContent;
//       });
//     });
// }

// // changeCalendarTitle();

// // Save all New habits in local Storage
// // Save theme in Array? in it habit Calendar title

// if (!localStorage.getItem("sidebar HABITS")) {
//   localStorage.setItem("sidebar HABITS", '["testing1"]');
// }

// function StoreHabitsToLocalStorage(NewHabitTitle) {
//   let habitsLocalStorageArr = JSON.parse(
//     localStorage.getItem("sidebar HABITS")
//   );
//   // let habitsLocalStorageArr = [];
//   habitsLocalStorageArr.push(NewHabitTitle);

//   localStorage.setItem("sidebar HABITS", JSON.stringify(habitsLocalStorageArr));
// }

// // Load all habits from local Storage
// // DONE
// function loadHabitsToSidebar() {
//   let habitsLocalStorageArr = JSON.parse(
//     localStorage.getItem("sidebar HABITS")
//   );
//   habitsLocalStorageArr.forEach((habit) => addNewCalendarToSidebar(habit));

//   // console.log(habitsLocalStorageArr);
// }

// // loadHabitsToSidebar();

// // StoreHabitsToLocalStorage("ghsgjsfjxfhhhhhhdj");
