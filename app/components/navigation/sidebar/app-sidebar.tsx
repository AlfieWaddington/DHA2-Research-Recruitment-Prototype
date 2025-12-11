import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarTrigger,
  SidebarSeparator,
  SidebarMenuSubItem
} from "../../ui/sidebar"

import {useState} from "react";


import { Home } from "lucide-react"

import { Microscope } from "lucide-react"
import { Calendar } from "lucide-react"
import { Gift } from "lucide-react"
import { Mail } from "lucide-react"
import { Info } from "lucide-react"
import { Settings } from "lucide-react"
import ToggleButton from "./theme-toggle"
import { Sun } from "lucide-react"
import { Moon } from "lucide-react"
 
const mainMenu = [
    {
        title: "Dashboard",
        url: "#",
        icon: Home,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Rewards",
        url: "#",
        icon: Gift,
    },
]

const studyInformation = [
    {
        title: "My Studies",
        url: "#",
        icon: Microscope,
    },
    {
        title: "Messages",
        url: "#",
        icon: Mail,
    },
    {
        title: "Info",
        url: "#",
        icon: Info,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

import * as React from 'react';


export function AppSidebar() {

    const [darkMode,setDarkMode] = useState(false);


  return (
    


    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
             <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                <SidebarGroupContent>
            <SidebarMenu>
              {mainMenu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
        
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>

            <SidebarGroupLabel>Study Information</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                    {studyInformation.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              </SidebarGroupContent>
        </SidebarGroup>

        

      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>  
               <SidebarMenu>
                    <SidebarMenuItem>
                        
                    
                        <SidebarMenuButton variant="outline" onClick={() => setDarkMode(!darkMode)}>
                            { darkMode ? <Sun /> : <Moon /> }
                            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                        
                        </SidebarMenuButton>

                    </SidebarMenuItem>
                    
                    <SidebarSeparator />

                    <SidebarTrigger />
                </SidebarMenu>     

            
        </SidebarGroup>
      </SidebarFooter> 
    </Sidebar>
  )
}

