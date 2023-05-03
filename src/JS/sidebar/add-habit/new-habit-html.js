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
