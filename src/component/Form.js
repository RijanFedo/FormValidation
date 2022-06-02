import "./form.css";
import Describe from "./describe";
import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../App";
import "animate.css";
import {
  Button,
  Checkbox,
  Chip,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system";

function Form() {
  const val = useContext(Context);
  const [languageErr, setLanguageErr] = useState(false);
  const [frameworkErr, setFrameworkErr] = useState(false);
  const [skillErr, setSkillErr] = useState(false);

  const [nameErr, setnameErr] = useState(false);
  const [nameVal, setNameVal] = useState("");

  const button = {
    color: "white",
    backgroundColor: val.name === "" ? "gray" : "blueviolet",
    position: "relative",
    top: "25px",
    left: "18px",
    padding: "3px",
    borderRadius: "12px",
    cursor: "pointer",
    width: "85px",
  };

  const validate = (e) => {
    e.preventDefault();

    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById("name").value;
    if (!name) {
      setNameVal("Please fill out the field");
      setnameErr(true);
    } else if (!regName.test(name)) {
      setNameVal("Invalid characters");
      setnameErr(true);
      document.getElementById("name").focus();
      val.setname("");
      return false;
    } else if (!val.allLang.includes(val.selectedLang)) {
      setLanguageErr(true);
    } else if (
      !val.lang
        .filter((l) => {
          return l.name === val.selectedLang;
        })[0]
        .frameworks.includes(val.selectedFrame)
    ) {
      setFrameworkErr(true);
    } else if (!val.personSkills.length > 0) {
      setSkillErr(true);
    } else {
      val.setname(name);
      val.setrender(<Describe />);
      val.settarget(2);

      return true;
    }
    // console.log(selectedLang);
  };

  // console.log(val.name);
  // console.log(val.selectedFrame);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSkillErr(false);

    val.setPersonSkills(
      // On autofill we get a stringified value.
      typeof event.target.value === "string"
        ? event.target.value.split("")
        : event.target.value
    );
    // console.log(value);
  };
  console.log(val.personSkills.length);

  return (
    <>
      <div className="person1 animate__animated animate__backInRight animate__faster">
        <span className="person_title">Step 1/3</span>
        <h4 className="person_h3">Let's start with your name</h4>

        <form
          autoComplete="off"
          onSubmit={(e) => validate(e)}
          className="d-flex flex-column gap-2"
        >
          <FormControl sx={{ m: 1, width: 380 }}>
            <TextField
              color="secondary"
              label="Name"
              type="text"
              name="name"
              onChange={(e) => {
                // e.target.value.length;
                setnameErr(false);
              }}
              defaultValue={val.name}
              id="name"
              placeholder="Enter your name"
            ></TextField>
            <p
              style={{ fontSize: "12px", display: nameErr ? "unset" : "none" }}
              className="text-danger"
            >
              {nameVal}
            </p>
          </FormControl>

          <FormControl sx={{ m: 1, width: 380 }}>
            <InputLabel color="secondary" id="demo-simple-select-label">
              Language
            </InputLabel>
            <Select
              color="secondary"
              labelId="demo-simple-select-label"
              defaultValue={val.selectedLang}
              id="demo-simple-select"
              label="Language"
              onChange={(e) => {
                val.setSelectedLang(e.target.value);
                setLanguageErr(false);
              }}
            >
              {val.lang.map((l) => {
                return <MenuItem value={l.name}>{l.name}</MenuItem>;
              })}
            </Select>
            <p
              style={{
                fontSize: "12px",
                display: languageErr ? "unset" : "none",
              }}
              className="text-danger"
            >
              Select a language
            </p>
          </FormControl>

          <FormControl sx={{ m: 1, width: 380 }}>
            <InputLabel color="secondary" id="demo-simple-select-label">
              Framework
            </InputLabel>
            <Select
              color="secondary"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Framework"
              onChange={(e) => {
                val.setSelectedFrame(e.target.value);
                setFrameworkErr(false);
              }}
              defaultValue={val.selectedFrame}
            >
              {val.lang.map((l) => {
                return (
                  l.name === val.selectedLang &&
                  l.frameworks.map((le) => {
                    return <MenuItem value={le}>{le}</MenuItem>;
                  })
                );
              })}
            </Select>
            <p
              style={{
                fontSize: "12px",
                display: frameworkErr ? "unset" : "none",
              }}
              className="text-danger"
            >
              Select a framework
            </p>
          </FormControl>

          <FormControl sx={{ m: 1, width: 380 }}>
            <InputLabel color="secondary" id="demo-multiple-checkbox-label">
              Skills
            </InputLabel>
            <Select
              color="secondary"
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={val.personSkills.map((m) => {
                return m;
              })}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Skills" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              // MenuProps={MenuProps}
            >
              {val.skills.map((skill) => (
                <MenuItem key={skill} value={skill}>
                  <Checkbox checked={val.personSkills.indexOf(skill) > -1} />
                  <ListItemText primary={skill} />
                </MenuItem>
              ))}
            </Select>
            <p
              style={{
                fontSize: "12px",
                display: skillErr ? "unset" : "none",
              }}
              className="text-danger"
            >
              Select atleast 1 skill
            </p>
          </FormControl>

          <Button className=" btn " type="submit" style={button}>
            Next
          </Button>
        </form>
      </div>
    </>
  );
}

export default Form;
