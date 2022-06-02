import {Context} from "../App"
import "./header.css"
import 'animate.css';
import React, {useContext} from"react"


 

function Header() {



  const val= useContext(Context)


  return (
      <>
   <div className="header_full">

<div className="header_text">
   <h1 className="header_h1 ">Developer registeration</h1>
    <p className="header_para" style={val.theme=="light"? {color:"black"}:{color:"white"}}>make your registration to receive a job</p>
</div>
<div className="header_icon">
{val.theme=="light"? <i class="fa-solid fa-moon moons " onClick={()=> val.settheme("dark")}/>:< i class="fa-solid fa-sun moons"  onClick={()=> val.settheme("light")}  />
}



</div>
   

   </div>
    
    <div className="header_hr "></div>

    </>
  )
}

export default Header

