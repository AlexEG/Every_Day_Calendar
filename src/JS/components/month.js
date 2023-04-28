function renderAllDaysOfMonth(month, numOfDays) {
  for (let i = 0; i < numOfDays; i++) {
    document.querySelector(`#month-${month}`).innerHTML += renderDayBtn(
      `${month}`,
      i + 1
    );
  }
}

function renderMonthContainer(month) {
  return `
  <!--*  ${month.toUpperCase()} [START] *-->
  <div id="month-${month}" class="group ">
  <h2
    class="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
    ${month.slice(0, 3)}
  </h2>


  <!--*  ${month.toUpperCase()} [END] *-->
  </div>

    `;
}

const monthNames = [
  ["January", 31],
  ["February", 28],
  ["March", 31],
  ["April", 30],
  ["May", 31],
  ["June", 30],
  ["July", 31],
  ["August", 31],
  ["September", 30],
  ["October", 31],
  ["November", 30],
  ["December", 31],
];
