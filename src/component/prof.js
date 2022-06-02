import Form from './Form'
import "./prof.css"
import React, {useContext} from"react"
import {Context} from "../App"

import  { useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function Prof() {
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  
  };
  

  const val= useContext(Context)

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);


const reset = () => {

  val.setname("")
  val.setrender(<Form/>)
  val.setcomplete(false)
  val.setemail("")
  val.setname("")
  
  val.setchoices(false)
  val.setfire(false)
  val.setchoice(false)
  val.settarget(1)

}

  return (
  <>
  
  <div className="prof">

<h2 className="prof-head">Congratulations</h2>
<p className="prof-para">Registration Shipped Sccessfully !</p>
{val.fire==true?fire():null}
{/* {val.fire==true?val.setemail(""):null} */}
<i className="fa-solid fa-circle-check icon"></i>

<p className="bottom-para">We Send an email to:<b>{val.email}</b>  with conformation of registration</p>
<span className="nxt" onClick={reset}>Back to Personal</span>

      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
  </div>
  

  
  </>
  )
}

export default Prof