function renderDayBtn(month, day) {
  return `
  <!-- ${month}-[${day}] -->
      <div class="w-20 h-20 flex justify-center items-end relative">
              <div
                class="absolute top-0.5 bg-gold2 w-3 h-3 rounded-full left-4 opacity-20"></div>
              <div
                class="absolute top-0.5 bg-gold2 w-3 h-3 rounded-full right-4 opacity-20"></div>
              <div
                class="absolute top-5 bg-gold2 w-2 h-2 rounded-full right-1 opacity-20"></div>
              <div
                class="absolute top-5 bg-gold2 w-2 h-2 rounded-full left-1 opacity-20"></div>
              <div
                class="absolute bottom-1 bg-gold2 w-2 h-2 rounded-full right-1 opacity-20"></div>
              <div
                class="absolute bottom-1 bg-gold2 w-2 h-2 rounded-full left-1 opacity-20"></div>
              <button id="${month}-${day}"
                class=" bg-gold w-14 h-14 hex flex justify-center items-center opacity-50 hover:opacity-100 transition duration-300 grayscale-[35%] hover:grayscale-0">
                <div
                  class="hex bg-black w-[3.25rem] h-[3.25rem] flex justify-center items-center">
                  <div
                    class="hex bg-gold  w-12 h-12 flex justify-center items-center">
                    <div
                      class="hex bg-black w-11 h-11 flex justify-center items-center">
                      <div
                        class="hex bg-gold w-10 h-10 flex justify-center items-center pb-1">
                        <span
                          class="text-white  font-semibold text-center text-xl ">
                          ${day}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
<!-- -->
    `;
}
