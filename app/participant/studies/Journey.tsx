import {Chrono} from "react-chrono"
import {useState} from "react"

import { Check } from "lucide-react"


 const render = [
            {
                title: "task1",
                cardTitle: "task1 Title",
                cardDetailedText: "Reward Earned"
            },

            {
                title: "task2",
                cardTitle: "task2 Title",
                cardDetailedText: "Reward Available"
            }

    ];


export function Journey(){

    const [progress, incrementProgress] = useState(Array(4).fill(null));

   



    return (
            <>
                <div className="pl-1 pr-1">

                    
                    <Chrono mode="alternating" items={render}>







                    </Chrono>


                </div>

            </>

    )


}