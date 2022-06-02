import "./App.css";
import Form from "./component/Form";
import Header from "./component/Header";
import Card from "./component/Card";
import React, { useState, useEffect } from "react";
import Prof from "./component/prof";
import Center from "./component/Center";
import Describe from "./component/describe";
import Email from "./component/Email";
import Basic from "./component/formik.js";
import axios from "axios";

export const Context = React.createContext();

function App() {
  const [render, setrender] = useState(<Form />);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [choice, setchoice] = useState(false);
  const [complete, setcomplete] = useState(false);

  const [choices, setchoices] = useState(false);
  const [target, settarget] = useState(1);
  const [fire, setfire] = useState(false);
  const [theme, settheme] = useState("light");
  const [github, setgithub] = useState("nohn");
  const [lang, setLang] = useState([]);
  const [selectedLang, setSelectedLang] = useState("");
  const [selectedFrame, setSelectedFrame] = useState("");
  const skills = [
    "Creativity",
    "Critical Thinking",
    "Problem Solving",
    "Public Speaking",
    "Communication",
    "Collaboration",
    "Management",
    "Empathy",
  ];
  const [personSkills, setPersonSkills] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://6256592b52d8738c692e2721.mockapi.io/languages"
    );
    const res = response.data;
    // console.log(res);
    setLang(res);
    console.log(lang);
  }, []);
  const allLang = lang.map((l) => {
    return l.name;
  });
  console.log(allLang);
  const objvalue = {
    skills,
    personSkills,
    setPersonSkills,
    allLang,
    selectedFrame,
    setSelectedFrame,
    selectedLang,
    setSelectedLang,
    lang,
    setLang,
    name,
    setname,
    email,
    setemail,
    setrender,
    choice,
    setchoice,
    choices,
    setchoices,
    complete,
    setcomplete,
    target,
    settarget,
    fire,
    setfire,
    theme,
    settheme,
    github,
    setgithub,
  };

  const color = {
    backgroundColor: theme == "light" ? "#fff" : "#000000",
    color: theme == "light" ? "#000000" : "#fff",
  };

  return (
    <>
      <Context.Provider value={objvalue}>
        <div className="App" style={color}>
          <Header />

          <div className="controller">
            <div className="controller-card ">
              <Card />
            </div>

            <div className="controller-center ">
              <Center />
            </div>
            <div className="controller-render">{render}</div>
          </div>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
