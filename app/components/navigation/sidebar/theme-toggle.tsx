
import { Sun } from "lucide-react"
import { Moon } from "lucide-react"
import {useState} from "react";
import {createContext} from "react";





export default function ToggleThemeButton(){
    const [toggled, setToggled] = useState(false);

    
    const toggleTheme = () => {
        setToggled(!toggled);
    }


    return(
        <>
        <button onClick = {toggleTheme}> { toggled ? <Sun /> : <Moon />}
        <span>{ toggled ? "Light Mode" : "Dark Mode"}</span>
        </button>
        </>
    )
}