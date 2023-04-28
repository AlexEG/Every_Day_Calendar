// Add/Remove active look form days btns

function addRemoveActiveDay() {
  document.querySelectorAll("button.hex").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("opacity-50")) {
        console.log("Add");
        btn.classList.remove("opacity-50");
        btn.classList.remove("grayscale-[35%]");
        btn.classList.add("brightness-110");
      } else {
        console.log("Remove ");
        btn.classList.add("opacity-50");
        btn.classList.add("grayscale-[35%]");
        btn.classList.remove("brightness-110");
      }
    });
  });
}
