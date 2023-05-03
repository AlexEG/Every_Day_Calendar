// //** change Calendar title  **//
// // change the title when click on any habit in sidebar

const calendarTitle = document.querySelector("#root > header > div > span");
function changeCalendarTitle() {
  const allHabitsInSidebar = document.querySelectorAll(
    "#new-habits-container div.sidebar-habit"
  );
  allHabitsInSidebar.forEach((habit) => {
    habit.addEventListener("click", () => {
      console.log(
        `%c Change Calendar Title to: %c   ${
          habit.querySelector("span.cal-title").textContent
        }   `,
        `color:#f0000f;`,
        `color:white; background-color:black; border-radius:50px; font-family:arial`
      );
      calendarTitle.textContent =
        habit.querySelector("span.cal-title").textContent;
    });
  });
}
