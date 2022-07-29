import { useState } from "react";


const Hamburger2 = () => {


    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    };

    return(

        <div onClick={ToggleClass} className="three-col">
        <div className={isActive ? "hamburger" : "hamburger is-active"} id="hamburger-1">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>


    )

}

export default Hamburger2;