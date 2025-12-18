import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card"


export function ProgressHeader(){



    return (
        <>
            <div className="pl-5 pr-5">

                
                <Card className="justify-start flex flex-col rounded-lg shadow bg-white dark:bg-gray-800" radius="lg">

                    <CardHeader className="justify-start flex-1/3 grid grid-cols-12">
                        <h1 className="sm:col-span-4">Your Study Journey</h1> <div className="sm:col-span-6"></div> <h2 className="sm:col-span-1 text-center">###</h2> <div className="sm:col-span-1"></div>
                        <h4 className="sm:col-span-4">Study Title</h4> <div className="sm:col-span-6"></div><h5 className="sm:col-span-2">Total Points</h5>

                    </CardHeader>

                    <CardBody className="justify-end flex-2/3 grid-cols-2">
                        
                        <Card>


                        </Card>

                        <Card>



                        </Card>

                    </CardBody>

                </Card>

            </div>
        </>
    );


}