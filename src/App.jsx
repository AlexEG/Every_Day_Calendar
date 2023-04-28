import DayBtn from "./components/DayBtn";
import Header from "./components/Header";
import DataMonths from "./components/DataMonths";

function addRemoveActiveDay() {
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

addRemoveActiveDay();
function App() {
  // Days Components
  const JanuaryDays = DataMonths[0]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`January${item}`} />;
  });
  const februaryDays = DataMonths[1]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`february${item}`} />;
  });
  const marchDays = DataMonths[2]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`march${item}`} />;
  });
  const aprilDays = DataMonths[3]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`april${item}`} />;
  });
  const mayDays = DataMonths[4]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`may${item}`} />;
  });
  const juneDays = DataMonths[5]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`june${item}`} />;
  });
  const julyDays = DataMonths[6]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`july${item}`} />;
  });
  const augustDays = DataMonths[7]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`august${item}`} />;
  });
  const septemberDays = DataMonths[8]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`september${item}`} />;
  });
  const octoberDays = DataMonths[9]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`october${item}`} />;
  });
  const novamberDays = DataMonths[10]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`novamber${item}`} />;
  });
  const decemberDays = DataMonths[11]["days"].map((item) => {
    return <DayBtn title={`${item}`} key={`december${item}`} />;
  });

  // --------------------------------------- //
  return (
    <>
      <Header />
      <div className="bg-black min-h-screen flex flex-col px-7">
        <main className="flex justify-center gap-4 py-4 ">
          {/* January */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              jan
            </h2>
            {JanuaryDays}
          </div>

          {/* February */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              feb
            </h2>
            {februaryDays}
          </div>

          {/* March */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              mar
            </h2>
            {marchDays}
          </div>

          {/* April */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              apr
            </h2>
            {aprilDays}
          </div>

          {/* May */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              may
            </h2>
            {mayDays}
          </div>

          {/* June  */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              jun
            </h2>
            {juneDays}
          </div>

          {/* July  */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              jul
            </h2>
            {julyDays}
          </div>

          {/* August  */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              aug
            </h2>
            {augustDays}
          </div>

          {/* September  */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              sep
            </h2>
            {septemberDays}
          </div>

          {/* October  */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              oct
            </h2>
            {octoberDays}
          </div>

          {/* November  */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              nov
            </h2>
            {novamberDays}
          </div>

          {/* December  */}
          <div className="group">
            <h2 className="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
              dec
            </h2>
            {decemberDays}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
