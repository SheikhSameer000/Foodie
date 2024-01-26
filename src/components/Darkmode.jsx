import React from "react";
import darkpng from "../images/dark-mode-button.png";
import lightpng from "../images/light-mode-button.png";

const Darkmode = () => {
    
    const [theme, setTheme] = React.useState(localStorage.getItem("theme")?
    localStorage.getItem("theme") : "light");
    const element = document.documentElement;
    React.useEffect(() =>{
        if(theme == "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            
        }else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    },[theme]);

    const changetheme = () => {
        if(theme == "light"){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }
  return (
    <>
      <div className="relative">
        <img
          src={darkpng}
          alt=""
          onClick={changetheme}
          className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] translate-all duration-300 ${theme !== "dark" ? "opacity-0" : "opacity-`100"}`}
        />
        <img
          src={lightpng}
          alt=""
          onClick={changetheme}
          className="w-12 right-0 z-10 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] translate-all duration-300"
        />
      </div>
    </>
  );
};

export default Darkmode;
