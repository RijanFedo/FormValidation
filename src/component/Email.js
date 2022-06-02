import React, { useContext } from "react";
import { Context } from "../App";
import "./email.css";
import Describe from "./describe";
import Prof from "./prof";
import { Formik } from "formik";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

function Email() {
  const val = useContext(Context);
  const github = process.env.REACT_APP_BASE_URL;

  const [verified, setverified] = useState(false);
  const [iconchange, seticonchange] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Please enter a valid email address";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const [imgUrl, setimgUrl] = useState({
    avatar_url: "https://via.placeholder.com/150",
  });
  const [text, settext] = useState("");
  const [fvalue, setfvalue] = useState("");

  const textConverter = (text) => {
    const word = text.toLowerCase();
    const value = word.split("/");
    return value === undefined ? setfvalue(text) : setfvalue(value[3]);
  };

  useEffect(() => {
    axios.get(github + fvalue).then((res) => {
      setimgUrl(res.data);
    });
  }, [fvalue]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      val.setfire(true);
      val.setemail(values.email);
      val.setrender(<Prof />);
      val.setcomplete(true);
      val.settarget("four");
      setverified(false);
    },
  });

  var finalval = false;
  if (val.name === "") {
    finalval = false;
  } else if (!verified === true) {
    finalval = false;
  } else if (val.choice === false && val.choices === false) {
    finalval = false;
  } else if (imgUrl.avatar_url === "https://via.placeholder.com/150") {
    finalval = false;
  } else {
    finalval = true;
  }

  const imgstyle = {
    height: "40px",
    borderRadius: "50%",
    position: "relative",
    top: "-13px",
    left: " -8px",

    display:
      imgUrl.avatar_url === "https://via.placeholder.com/150"
        ? "none"
        : "block",

    objectFit: "cover",
  };

  const verifyicon = {
    display:
      imgUrl.avatar_url === "https://via.placeholder.com/150"
        ? "none"
        : fvalue === undefined
        ? "none"
        : "block",

    color: "green",
    fontWeight: "bold",
    height: "50px",
  };

  const nxtbtn = {
    color: "white",
    backgroundColor: finalval === false ? "gray" : "#5b2993",
    position: "relative",
    top: "25px",
    left: "12px",
    width: "70px",
    padding: "2px",
    borderRadius: "10px",
  };

  const sicon = {
    padding: "10px",
    position: "relative",
    right: "-330px",
    color: "#5b2993",

    textAlign: "center",
    cursor: "pointer",
    zIndex: "1",
    backgroundColor: "transparent",
    border: "none",
    display: iconchange === false ? "inline-block" : "none",
  };
  const reset = {
    position: "relative",
    right: "-326px",
    color: "#5b2993",
    border: "none",
    textAlign: "center",
    cursor: "pointer",
    zIndex: "1",
    fontSize: "17px",
    top: "3",
    display: iconchange === true ? "inline-block" : "none",
    backgroundColor: "transparent",
    padding: "10px",
  };

  return (
    <>
      <div className="email  animate__animated animate__backInRight animate__faster">
        <span className="email_title">Step 3/3</span>
        <h4 className="email_h3">
          Cool
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
          , where do we find you?
        </h4>
        <p className="email_para">
          Fill in with your contact to get us into contact.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <label className="email_label" htmlFor="name">
            What is your email?
          </label>
          <br></br>
          {formik.errors.email ? (
            <small className="reqs">{formik.errors.email}</small>
          ) : null}
          <input
            id="email"
            name="email"
            className="input-vals"
            placeholder="absd@gmail.com"
            type="email"
            onChange={formik.handleChange}
            defaultValue={val.email}
          />
          <br></br>

          <label
            htmlFor="firstName"
            style={{ display: "inline-block", padding: "4px 0" }}
          >
            What is your GitHub?
          </label>
          <br />

          <div className="custom-div">
            <div className="icon-btn">
              {iconchange === false ? (
                <button
                  class="fa-solid fa-magnifying-glass"
                  style={sicon}
                  disabled={text === "" ? true : false}
                  type="button"
                  onClick={() => {
                    textConverter(text);
                    setverified(true);
                    seticonchange(true);
                  }}
                ></button>
              ) : (
                <button
                  class="fa-solid fa-rotate-right sicon"
                  type="reset"
                  style={reset}
                  onClick={() => {
                    setverified(false);
                    textConverter("");
                    seticonchange(false);
                    settext("");

                    setimgUrl({
                      avatar_url: "https://via.placeholder.com/150",
                    });
                  }}
                ></button>
              )}
            </div>

            <input
              type="text"
              name="name"
              className="input-valsg"
              onChange={(e) => settext(e.target.value)}
              // readOnly={ fvalue == undefined? true:false}
              placeholder="https://github.com/andersonDias78 "
              defaultValue={text}
            />
          </div>
          <div className="Err-message">
            {fvalue === undefined ? (
              <small className="reqsr">Not an url</small>
            ) : null}

            {text === "" ? (
              <small className="reqsr">
                Verify your profile using search icon
              </small>
            ) : null}

            {val.email === ""
              ? val.name === "" && (
                  <span className="complete">Complete all the Step</span>
                )
              : null}
          </div>
          <div className="output-img">
            <img style={imgstyle} src={imgUrl.avatar_url} />

            <small style={verifyicon} className="txt-val ">
              Verifed <i class="fa-solid fa-square-check check-icon "></i>
            </small>
          </div>

          <div className="bt-group">
            <span
              className="back-btn"
              onClick={() => {
                val.setrender(<Describe />);
                val.settarget(2);
              }}
            >
              Back
            </span>
            <Button
              type="submit"
              className="sub-btn"
              style={nxtbtn}
              disabled={finalval === false ? true : false}
            >
              Submit
            </Button>
          </div>
        </form>

        <br></br>
      </div>
    </>
  );
}

export default Email;
