import React from "react";

function Buttons({ setAbout }) {
  const handleClick = (section) => {
    setAbout(section);
  };
  return (
    <div className="flex justify-center w-[25%] gap-3 max-xl:flex-col max-[880px]:w-[60%] max-sm:w-[80%] mx-auto">
      <div className="flex gap-3 flex-grow max-xl:w-[100%] max-sm:flex-col">
        <div
          onClick={() => handleClick("Me")}
          className="mx-1 flex-grow bg-[#FFA800] justify-center cursor-pointer text-lg font-medium flex hover:bg-yellow-300 rounded-lg px-5 h-[40px] text-center items-center text-[snow] max-sm:text-base max-sm:h-auto max-sm:py-2 break-words"
        >
          Learn about Kartik Verma
        </div>
      </div>
    </div>
  );
}

export default Buttons;
