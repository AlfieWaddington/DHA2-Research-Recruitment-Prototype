import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar"
import { AppSidebar } from "../../components/navigation/sidebar/app-sidebar"
import {ContentWrapper } from "./ContentWrapper"
import {ProgressHeader} from "./ProgressHeader"
import {Journey } from "./Journey"
import App from "~/root"


import {useDarkMode} from "usehooks-ts"


export default function Dashboard({ children }: {children:React.ReactNode}){

    return (
        <>
            <div className="darkModeDiv">
                <SidebarProvider>

                    <nav>
                    <AppSidebar />
                    </nav>

                    <main  className="flex-4">


                        <ContentWrapper>
                            <ProgressHeader />

                        
                          


                        </ContentWrapper>




                    </main>

                    
            
                </SidebarProvider>
               
           </div>


        </>
    )


    

}

