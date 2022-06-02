import "./center.css";
import React, { useContext } from "react";
import { Context } from "../App";

function Center() {
  const val = useContext(Context);

  const focuscolor = {
    backgroundColor: "#5b2993",
  };

  const centerObj = [
    {
      firstClass: "step",
      circleClass: "circle circle-1",
      targetValue: 1,
    },
    {
      firstClass: "step",
      circleClass: "circle circleOne",
      targetValue: 2,
    },
    {
      firstClass: "step",
      circleClass: "circle circletwo",
      targetValue: 3,
    },
    {
      firstClass: "step",
      circleClass: "circle circlefinal",
      targetValue: "four",
    },
  ];
  return (
    <>
      <div className="center-res">
        {centerObj.map((item) => {
          return (
            <div className="step">
              <div>
                <div
                  className={item.circleClass}
                  style={val.target === item.targetValue ? focuscolor : null}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Center;
