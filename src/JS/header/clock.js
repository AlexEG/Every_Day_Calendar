function headerClock() {
  let date = new Date();

  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  document
    .querySelector("#root > header > div > div > time")
    .setAttribute("datetime", `${h}:${m}`);
  let session = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  const time = `${h}:${m} ${session}`;
  setTimeout(headerClock, 60000);
  document.querySelector("#root > header > div > div > time").textContent =
    time;
}

headerClock();
