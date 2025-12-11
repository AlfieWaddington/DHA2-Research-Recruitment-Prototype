import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar"
import { AppSidebar } from "../../components/navigation/sidebar/app-sidebar"
import App from "~/root"





export default function Dashboard({ children }: {children:React.ReactNode}){




    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main>
            
                    {children}
             


                </main>

                
        
            </SidebarProvider>
        </>
    )


    

}

