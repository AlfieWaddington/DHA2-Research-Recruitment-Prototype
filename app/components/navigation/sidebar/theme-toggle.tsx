import { BadgeWithIcon } from "~/components/untitledDUI/base/badges/badges";
import { Sun } from "lucide-react"
import { Moon } from "lucide-react"
import {useState} from "react";

export function DarkModeButton (handleToggle){

    return (
        <button onClick={handleClick}>
            <BadgeWithIcon type="modern" color="brand" size="md" iconLeading={Moon}>Dark Mode</BadgeWithIcon>
        </button>
);

}

export function LightModeButton(handleToggle){

    return (
        <button>
            <BadgeWithIcon type="modern" color="brand" size="md" iconLeading={Sun}>Light Mode</BadgeWithIcon>
        </button>
    
  );
}

export default function ToggleButton(){
    const [selected, setSelected] = useState(false);

    function setState(){
        setSelected(!selected);
    }

    return(
        <button onClick={()=>setSelected(!selected)}>{selected && <Sun />}</button>

    )
}