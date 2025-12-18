import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card"
import { Flame } from "lucide-react";
import { Star } from "lucide-react";

export function ProgressHeader(){



    return (
        <>
            <div className="pl-5 pr-5 justify-start">

                
                <Card className="flex flex-col rounded-lg shadow bg-white dark:bg-gray-800" radius="lg">

                    <CardHeader className="justify-start flex-1/3 grid grid-cols-12">
                        <h1 className="sm:col-span-4">Your Study Journey</h1> <div className="sm:col-span-6"></div> <h2 className="sm:col-span-1 text-center">###</h2> <div className="sm:col-span-1"></div>
                        <h4 className="sm:col-span-4">Study Title</h4> <div className="sm:col-span-6"></div><h5 className="sm:col-span-2">Total Points</h5>

                    </CardHeader>

                    <CardBody className="justify-end flex-2/3 grid grid-cols-2">
                        
                        <Card className="rounded-lg shadow bg-linear-to-b from-yellow-500 to-red-500">
                            
                            <CardHeader>
                                <Flame /> <h4> # Task Streak!</h4>
                            </CardHeader>


                            <CardBody>
                                <p className= "text-body-small">
                                    Complete your tasks by their due dates to maintain your streak
                                </p>
                            </CardBody>

                        </Card>

                        <Card className="rounded-lg shadow bg-linear-to-r from-purple-500 to-pink-500">
                            <CardHeader>
                                <Star /> <h4> #&#215; Bonus</h4>
                            </CardHeader>


                            <CardBody>
                                <p className= "text-body-small">
                                    Reward multiplier based on your highest streak
                                </p>
                            </CardBody>

                        </Card>

                    </CardBody>

                </Card>

            </div>
        </>
    );


}