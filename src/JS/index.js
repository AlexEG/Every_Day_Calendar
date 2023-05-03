console.log(" '2023-4-28' ");

//**  RENDER CALENDER **//
monthNames.forEach((month) => {
  document.querySelector("#root > div > main").innerHTML +=
    renderMonthContainer(month[0]);
  renderAllDaysOfMonth(month[0], month[1]);
});

//**  Add/Remove Active Day **//
addRemoveActiveDay();

//**  Mark in loacl storage **//
addClassMarked();

// //**  SIDEBAR ADD NEW CALENDAR **//

// //** change Calendar title  **//
changeCalendarTitle();

// HEADER //
markedVsUnmarked();
