import DayBtn from "./components/DayBtn";
import Header from "./components/Header";
{
  document.querySelectorAll("button").forEach((btn) => {
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
function App() {
  return (
    <>
      <Header />
      <div className="bg-black min-h-screen flex flex-col px-7">
        <main className="flex justify-center gap-4 py-4 ">
          {/* January  */}
          <div>
            <h2 className="text-gold2 opacity-50 font-semibold text-center  mb-2">
              jan
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
            <DayBtn title="29" />
            <DayBtn title="30" />
            <DayBtn title="31" />
          </div>
          {/* February  */}
          <div>
            <h2 className="text-gold2 opacity-50  font-semibold text-center  mb-2">
              feb
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
          </div>
          {/* March  */}
          <div>
            <h2 className="text-gold2 opacity-50  font-semibold text-center  mb-2">
              mar
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
            <DayBtn title="29" />
            <DayBtn title="30" />
            <DayBtn title="31" />
          </div>
          {/* April  */}
          <div>
            <h2 className="text-gold2 opacity-50  font-semibold text-center  mb-2">
              apr
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
            <DayBtn title="29" />
            <DayBtn title="30" />
          </div>
          {/* May  */}
          <div>
            <h2 className="text-gold2 opacity-50  font-semibold text-center  mb-2">
              may
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
            <DayBtn title="29" />
            <DayBtn title="30" />
            <DayBtn title="31" />
          </div>
          {/* June  */}
          <div>
            <h2 className="text-gold2 opacity-50  font-semibold text-center  mb-2">
              jun
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
            <DayBtn title="29" />
            <DayBtn title="30" />
          </div>
          {/* July  */}
          <div>
            <h2 className="text-gold2 opacity-50  font-semibold text-center  mb-2">
              jul
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
            <DayBtn title="29" />
            <DayBtn title="30" />
            <DayBtn title="31" />
          </div>
          {/* August  */}
          <div>
            <h2 className="text-gold2 opacity-50  font-semibold text-center  mb-2">
              aug
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
            <DayBtn title="29" />
            <DayBtn title="30" />
            <DayBtn title="31" />
          </div>
          {/* September  */}
          <div>
            <h2 className="text-gold2 opacity-50  font-semibold text-center  mb-2">
              sep
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
            <DayBtn title="29" />
            <DayBtn title="30" />
          </div>
          {/* October  */}
          <div>
            <h2 className="text-gold2 opacity-50  font-semibold text-center  mb-2">
              oct
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
            <DayBtn title="29" />
            <DayBtn title="30" />
            <DayBtn title="31" />
          </div>
          {/* November  */}
          <div>
            <h2 className="text-gold2 opacity-50  font-semibold text-center  mb-2">
              nov
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
            <DayBtn title="29" />
            <DayBtn title="30" />
          </div>
          {/* December  */}
          <div>
            <h2 className="text-gold2 opacity-50  font-semibold text-center  mb-2">
              dec
            </h2>

            <DayBtn title="1" />
            <DayBtn title="2" />
            <DayBtn title="3" />
            <DayBtn title="4" />
            <DayBtn title="5" />
            <DayBtn title="6" />
            <DayBtn title="7" />
            <DayBtn title="8" />
            <DayBtn title="9" />
            <DayBtn title="10" />
            <DayBtn title="11" />
            <DayBtn title="12" />
            <DayBtn title="13" />
            <DayBtn title="14" />
            <DayBtn title="15" />
            <DayBtn title="16" />
            <DayBtn title="17" />
            <DayBtn title="18" />
            <DayBtn title="19" />
            <DayBtn title="20" />
            <DayBtn title="21" />
            <DayBtn title="22" />
            <DayBtn title="23" />
            <DayBtn title="24" />
            <DayBtn title="25" />
            <DayBtn title="26" />
            <DayBtn title="27" />
            <DayBtn title="28" />
            <DayBtn title="29" />
            <DayBtn title="30" />
            <DayBtn title="31" />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
