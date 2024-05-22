import React from "react";
import "./MarqueeText.css";
import content from "../../constants/topmarqueedata.json";

const MarqueeText = ({ filter }) => {
  return (
    <>
      {/* header small marquee/auto-moving text */}
      {filter === "small" && (
        <div className="w-full h-20 flex items-center bg-black">
          <div className="slider m-auto overflow-hidden relative max-w-[1200px] w-[100%]">
            <div className="slide-track flex gap-16 items-center">
              {(content || [])?.map((values, index) => (
                <React.Fragment key={index}>
                  {values.image && (
                    <img
                      src={values.image}
                      alt=""
                      className="w-[35px] h-[35px] rounded-full object-cover"
                    />
                  )}
                  {values.text && (
                    <div className="slide text-white font-futura-bold text-xs">
                      {values.text}
                    </div>
                  )}
                  <div className="dot bg-white rounded-full"></div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* large marquee/auto-moving text */}
      {filter === "large" && (
        <div className="w-full h-60 md:h-96 flex items-center bg-transparent">
          <div className="slider m-auto overflow-hidden relative w-full">
            <div className="slide-track flex gap-16 items-center">
              <div className="w-max text-dullblack font-futura-bold text-8xl md:text-9xl">
                flora planters
              </div>

              <div className="w-max text-dullblack font-futura-bold text-8xl md:text-9xl">
                flora planters
              </div>

              <div className="w-max text-dullblack font-futura-bold text-8xl md:text-9xl">
                flora planters
              </div>

              <div className="w-max text-dullblack font-futura-bold text-8xl md:text-9xl">
                flora planters
              </div>

              <div className="w-max text-dullblack font-futura-bold text-8xl md:text-9xl">
                flora planters
              </div>

              <div className="w-max text-dullblack font-futura-bold text-8xl md:text-9xl">
                flora planters
              </div>

              <div className="w-max text-dullblack font-futura-bold text-8xl md:text-9xl">
                flora planters
              </div>

              <div className="w-max text-dullblack font-futura-bold text-8xl md:text-9xl">
                flora planters
              </div>

              <div className="w-max text-dullblack font-futura-bold text-8xl md:text-9xl">
                flora planters
              </div>

              <div className="w-max text-dullblack font-futura-bold text-8xl md:text-9xl">
                flora planters
              </div>

              <div className="w-max text-dullblack font-futura-bold text-8xl md:text-9xl">
                flora planters
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MarqueeText;
