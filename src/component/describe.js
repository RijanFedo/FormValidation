import "./describe.css";
import React, { useContext } from "react";
import { Context } from "../App";
import Form from "./Form";
import Email from "./Email";
import { Button } from "@mui/material";

function Describe() {
  const val = useContext(Context);

  const contain = {
    margin: "0",
    padding: "0",
    border: "2px solid #5b2993",
    borderRadius: " 10px",
    display: "inline-block",
    width: "400px",
    display: "grid",
    backgroundColor: val.choice === true ? "gray" : null,

    cursor: "pointer",
  };

  const container = {
    margin: "0",
    padding: "0",
    border: "2px solid #5b2993",
    borderRadius: " 10px",
    display: "inline-block",
    width: "400px",
    display: "grid",
    backgroundColor: val.choices === true ? "gray" : null,

    cursor: "pointer",
  };

  const logic = () => {
    val.setchoice(true);
    val.setchoices(false);
  };

  const logics = () => {
    val.setchoice(false);
    val.setchoices(true);
  };

  const ntnbtn = {
    color: "white",
    backgroundColor:
      val.choice === true || val.choices === true ? "#5b2993" : "gray",
    position: "relative",
    top: "15px",
    left: "26px",
    padding: "4px",
    borderRadius: "8px",
    width: "67px",
    cursor: "pointer",
  };

  return (
    <>
      <div className="describe  animate__animated animate__backInRight animate__faster">
        <span className="describe-title">Step 2/3</span>
        <h5 className="describre_h3">
          {" "}
          <span style={{ textTransform: "capitalize" }}>
            {val.name === "" ? (
              <span
                className="reqs"
                style={{
                  display: "inline",
                  position: "relative",
                  top: "-1px",
                  left: "-1px",
                }}
              >
                Name
              </span>
            ) : (
              val.name
            )}
          </span>
          , What best Describe you ?
        </h5>
        <p className="describe_para">
          Choose the option that best describe your level currently
        </p>

        <div className=" conatiner-fluid custom-container m-3" style={contain}>
          <div className="row">
            <div className="col-2">
              <img
                src="https://img.icons8.com/emoji/48/000000/partying-face.png"
                alt="party-icon"
                className="imga"
              />
            </div>
            <div className="col-10 " onClick={logic}>
              <p className="choice">I'm a beginner</p>
              <span className="choice_span">
                I started programming less than 2 years ago
              </span>
            </div>
          </div>

          <br></br>
        </div>

        <div
          className=" conatiner-fluid m-3  custom-container"
          style={container}
        >
          <div className="row">
            <div className="col-2">
              <img
                src="https://img.icons8.com/emoji/48/000000/smiling-face-with-sunglasses.png"
                alt="sunglass-img"
                className="imga"
              />
            </div>
            <div className="col-10" onClick={logics}>
              <p className="choice">I'm a Programmer</p>
              <span className="choice_span">
                I've been programmer for 2 years ago.
              </span>
            </div>
          </div>

          <br></br>
        </div>
        <span
          className="back-btn"
          onClick={() => {
            val.setrender(<Form />);
            val.settarget(1);
          }}
        >
          Back
        </span>
        <Button
          style={ntnbtn}
          className="nxt-btn"
          disabled={val.choice === true || val.choices === true ? false : true}
          onClick={() => {
            val.setrender(<Email />);
            val.settarget(3);
          }}
        >
          Next{" "}
        </Button>
      </div>
    </>
  );
}

export default Describe;
