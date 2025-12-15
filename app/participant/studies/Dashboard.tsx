import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar"
import { AppSidebar } from "../../components/navigation/sidebar/app-sidebar"
import App from "~/root"


import {useDarkMode} from "usehooks-ts"


export default function Dashboard({ children }: {children:React.ReactNode}){

    return (
        <>
            <div className="darkModeDiv">
                <SidebarProvider>
                    <AppSidebar />
                    <main>
                
                        {children}
                


                    </main>

                    
            
                </SidebarProvider>
           </div>

        


        </>
    )


    

}

