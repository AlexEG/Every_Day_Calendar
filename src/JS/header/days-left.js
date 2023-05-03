const daysLeftPer = document.querySelector("#days-left p:nth-of-type(2)");
const daysLeftNum = document.querySelector("#days-left span");

const currentDayNumberOfYear = new Date().getYear();

daysLeftNum.innerHTML = `${currentDayNumberOfYear} | ${
  365 - currentDayNumberOfYear
}`;

daysLeftPer.innerHTML = `${
  100 - ((currentDayNumberOfYear / 365) * 100).toFixed(2)
}%`;

//
//

//** Current/Longest Streak **//
const LongestStreakNum = document.querySelector(
  "#longest-streak > p:nth-of-type(1)"
);

const LongestStreakDateFrom = document.querySelector(
  "#longest-streak > p:nth-of-type(2) span:nth-of-type(1)"
);

const LongestStreakDateTo = document.querySelector(
  "#longest-streak > p:nth-of-type(2) span:nth-of-type(2)"
);

function LongestStreak() {
  const markedDayNum = document.querySelectorAll("button.marked");
  const markedDayNumArr = [];

  markedDayNum.forEach((day) => {
    markedDayNumArr.push(day.id);
  });
  const monthDay = markedDayNumArr
    .map((day) => day.split("-"))
    .map((d) => d[0]);

  const jan = monthDay.filter((day) => day === "January").length;
  const feb = monthDay.filter((day) => day === "February").length;
  const mar = monthDay.filter((day) => day === "March").length;
  const apr = monthDay.filter((day) => day === "April").length;
  const may = monthDay.filter((day) => day === "May").length;
  const jun = monthDay.filter((day) => day === "June").length;
  const jul = monthDay.filter((day) => day === "July").length;
  const aug = monthDay.filter((day) => day === "August").length;
  const sep = monthDay.filter((day) => day === "September").length;
  const oct = monthDay.filter((day) => day === "October").length;
  const nov = monthDay.filter((day) => day === "November").length;
  const dec = monthDay.filter((day) => day === "December").length;

  const monthArr = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];
  LongestStreakNum.textContent = monthArr.reduce((pre, cur) =>
    pre > cur ? pre : cur
  );

  // console.log(monthDay);
  // console.log(monthArr.reduce((pre, cur) => (pre > cur ? pre : cur)));
}
