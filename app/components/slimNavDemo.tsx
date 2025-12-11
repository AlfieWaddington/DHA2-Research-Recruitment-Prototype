import type { FC } from "react";
const bust = require("../assets/bust.svg");
const gear = require("../assets/gear.svg");
const microscope = require("../assets/microscope.svg");
const home = require("../assets/home.svg");

import type { NavItemType } from "./navigation/sidebar/sidebar-logic";
import { SidebarNavigationSlim } from "./navigation/sidebar/sidebarUntitled";
 
const navItemsDualTier: (NavItemType & { icon: FC<{ className?: string }> })[] = [
    {
        label: "Home",
        href: "/",
        icon: home,
        items: [
            { label: "Overview", href: "/overview", icon: Grid03 },
            { label: "Products", href: "/products", icon: Package },
            { label: "Orders", href: "/orders", icon: CurrencyDollarCircle },
            { label: "Customers", href: "/customers", icon: Users01 },
            { label: "Inbox", href: "/inbox", icon: Inbox01, badge: 4 },
            { label: "What's new?", href: "/whats-new", icon: Stars01 },
        ],
    },
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: BarChartSquare02,
        items: [
            { label: "Overview", href: "/dashboard/overview", icon:  },
        ],
    },
    {
        label: "Projects",
        href: "/projects",
        icon: Rows01,
        items: [
            { label: "View all", href: "/projects/all", icon: Rows01 },
            { label: "Personal", href: "/projects/personal", icon: User01 },
            { label: "Team", href: "/projects/team", icon: Users01 },
            { label: "Shared with me", href: "/projects/shared-with-me", icon: UsersPlus },
            { label: "Archive", href: "/projects/archive", icon: Archive },
        ],
    },
    {
        label: "Tasks",
        href: "/tasks",
        icon: CheckDone01,
        badge: 10,
    },
    {
        label: "Reporting",
        href: "/reporting",
        icon: PieChart03,
    },
    {
        label: "Users",
        href: "/users",
        icon: Users01,
    },
];
export const SidebarNavigationSlimDemo = () => (
    <SidebarNavigationSlim
        items={navItemsDualTier}
        footerItems={[
            {
                label: "Support",
                href: "/support",
                icon: LifeBuoy01,
            },
            {
                label: "Settings",
                href: "/settings",
                icon: Settings01,
            },
        ]}
    />
);

