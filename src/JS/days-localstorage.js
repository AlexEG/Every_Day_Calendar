// Add/Remove active look form days btns

function addRemoveActiveDay() {
  document.querySelectorAll("button.hex").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("opacity-50")) {
        console.log("day marked");
        btn.classList.remove("opacity-50");
        btn.classList.remove("grayscale-[35%]");
        btn.classList.add("brightness-105");
        // class have no styles
        btn.classList.add("marked");
        // add/remove from local storage
        console.log("Add to local storage");
        localStorage.setItem(btn.id, "marked");

        btn
          .querySelector(" div > div > div > div > span")
          .classList.add("brightness-0");
      } else {
        console.log("day unmarked");
        btn.classList.add("opacity-50");
        btn.classList.add("grayscale-[35%]");
        btn.classList.remove("brightness-105");
        btn.classList.remove("marked");
        // add/remove from local storage
        console.log("Remove from local storage");
        localStorage.removeItem(btn.id);

        btn
          .querySelector(" div > div > div > div > span")
          .classList.remove("brightness-0");
      }
    });
  });
}

// on load add class marked to btns that in local storage
function addClassMarked() {
  document.querySelectorAll("button.hex").forEach((btn) => {
    if (localStorage.getItem(btn.id) === "marked") {
      btn.classList.remove("opacity-50");
      btn.classList.remove("grayscale-[35%]");
      btn.classList.add("brightness-110");
      btn.classList.add("marked");
      btn
        .querySelector(" div > div > div > div > span")
        .classList.add("brightness-0");
    }
  });
}
