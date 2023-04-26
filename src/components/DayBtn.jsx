/* eslint-disable react/prop-types */

function DayBtn(props) {
  return (
    <div className=" w-20 h-20 flex justify-center items-end relative">
      {/* circles */}
      <div className="absolute top-0.5 bg-gold2 w-3 h-3 rounded-full left-4 opacity-20"></div>
      <div className="absolute top-0.5 bg-gold2 w-3 h-3 rounded-full right-4 opacity-20"></div>

      <div className="absolute top-5 bg-gold2 w-2 h-2 rounded-full right-1 opacity-20"></div>
      <div className="absolute top-5 bg-gold2 w-2 h-2 rounded-full left-1 opacity-20"></div>

      <div className="absolute bottom-1 bg-gold2 w-2 h-2 rounded-full right-1 opacity-20"></div>
      <div className="absolute bottom-1 bg-gold2 w-2 h-2 rounded-full left-1 opacity-20"></div>

      <button className=" bg-gold w-14 h-14 hex flex justify-center items-center opacity-50 hover:opacity-100 transition duration-300 grayscale-[35%] hover:grayscale-0">
        <div className="hex bg-black w-[3.25rem] h-[3.25rem] flex justify-center items-center">
          <div className="hex bg-gold  w-12 h-12 flex justify-center items-center">
            <div className="hex bg-black w-11 h-11 flex justify-center items-center">
              <div className="hex bg-gold w-10 h-10 flex justify-center items-center pb-1">
                <span className=" text-white  font-semibold text-center text-xl ">
                  {props.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default DayBtn;
