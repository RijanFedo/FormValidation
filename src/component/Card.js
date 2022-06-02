import "./card.css";
import Prof from "./prof";
import Center from "./Center";
import Describe from "./describe";
import Email from "./Email";
import Form from "./Form";
import React, { useContext } from "react";
import { Context } from "../App";

function Card() {
  const val = useContext(Context);

  const personal = {
    backgroundColor: val.name === "" ? "#33842dad" : "#5b2993",
  };
  const pro = {
    backgroundColor:
      val.choice || val.choices === true ? "#5b2993" : "#33842dad",
  };
  const mail = {
    backgroundColor: val.email === "" ? "#33842dad" : "#5b2993",
  };
  const done = {
    backgroundColor: val.complete === false ? "#33842dad" : "#5b2993",
  };

  const cardObj = [
    {
      firstclass: "card-one",
      target: 1,
      render: Form,
      textclass: "card-text",
      head: "Personal",
      title: "Identify Yourself",
      iconclass: "icons",
      stylefor: personal,
      icon: "fa-solid fa-head-side-virus",
    },
    {
      firstclass: "card-one",
      target: 2,
      render: Describe,
      textclass: "card-text card-custom-2",
      head: "Professonal",
      title: "Your level",
      iconclass: "icons custom-icon-2",
      stylefor: pro,
      icon: "fa-solid fa-newspaper ",
    },
    {
      firstclass: "card-one",
      target: 3,
      render: Email,
      textclass: "card-text",
      head: "Conatcts",
      title: "How to find you",
      iconclass: "icons",
      stylefor: mail,
      icon: "fa-solid fa-envelope",
    },
    {
      firstclass: "card-one",
      target: 1,
      render: Form,
      textclass: "card-text card-custom-2",
      head: "Complete",
      title: "Success",
      iconclass: "icons custom-icon-2",
      stylefor: done,
      icon: "fa-solid fa-circle-check",
    },
  ];

  return (
    <>
      <div className="total-card">
        {cardObj.map((list) => {
          return (
            <div
              className="card-one"
              onClick={() => {
                val.settarget(list.target);
                val.setrender(<list.render />);
              }}
            >
              <div className={list.textclass}>
                <span className="card-h">{list.head}</span>
                <span className="card-sp">{list.title}</span>
              </div>
              <div className={list.iconclass} style={list.stylefor}>
                <i className={list.icon}></i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
