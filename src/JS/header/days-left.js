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
