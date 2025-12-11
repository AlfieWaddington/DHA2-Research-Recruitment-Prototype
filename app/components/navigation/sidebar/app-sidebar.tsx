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
  SidebarSeparator
} from "../../ui/sidebar"

import {useState} from "react";


import { Home } from "lucide-react"

import { Microscope } from "lucide-react"
import { Calendar } from "lucide-react"
import { Gift } from "lucide-react"
import { Mail } from "lucide-react"
import { Info } from "lucide-react"
import { Settings } from "lucide-react"


 
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



export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);
  const DarkMode = "Dark Mode";
  const LightMode = "Light Mode";

  return (
    <BadgeWithIcon type="modern" color="brand" size="md" iconLeading={Sun}>Dark Mode</BadgeWithIcon>
  );
}

export function AppSidebar() {
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
                    <ThemeToggle />
                    
                    <SidebarSeparator />

                    <SidebarTrigger />
                </SidebarMenu>     

            
        </SidebarGroup>
      </SidebarFooter> 
    </Sidebar>
  )
}

