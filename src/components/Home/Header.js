import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';



const options = {
    activeClass: "active",
      spy: true,
      smooth: true,
      hashSpy: false,
      offset: -10,
      duration: 1500,
      delay: 500,
      isDynamic: false
}

const Header = () => (
    <div className={"Header"} id="startScroll">
        <div className={"imgHeader"}></div>
        <div className={"topMenu"}>
            <div className={"flex-end"}>
               <div className={"login-register"}>
                    <Link to="/login" className={"underline"}><button className={"login"}>Zaloguj</button></Link>
                    <Link to="/register" className={"underline"}><button className={"register"}>Załóż konto</button></Link>
                </div> 
            </div>
            
            
            <div className={"navigation"}>
                <button className={"start"}>Start</button>
                <button className={"info"}><ScrollLink to="stepsScroll" {...options}>O co chodzi?</ScrollLink></button>
                <button className={"about"}><ScrollLink to="aboutScroll" {...options}>O nas</ScrollLink></button>
                <button className={"fundation"}><ScrollLink to="helpScroll" {...options}>Fundacja i organizaje</ScrollLink></button>
                <button className={"contact"}><ScrollLink to="overlayScroll" {...options}>Kontakt</ScrollLink></button>
            </div>
            
        </div>
        <div className={"intro"}>
            <div className={"title"}>
               <p className={"textHelp"}>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</p>
                <div className={"decoration"}></div> 
            </div>
            
            <div className={"introFlex"}>
                <Link to="/login" className={"underline"}><button className={"rectangleLeft"}>
                    <p className={"textRectangleL"}>ODDAJ RZECZY</p>
                </button></Link>
                <Link to="/login" className={"underline"}><button className={"rectangleRight"}>
                    <p className={"textRectangleR"}>ZORGANIZUJ ZBIÓRKĘ</p>
                </button></Link>
            </div>
        </div>
    </div>
    
)

export default Header;
