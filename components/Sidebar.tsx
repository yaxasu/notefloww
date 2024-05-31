"use client"
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {

    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label: "Home",
            active: pathname !== '/search',
            href: '/',
            icon: HiHome
        },
        {
            label: "Search",
            active: pathname === '/search',
            href: '/search',
            icon: BiSearch,
        }
    ], [pathname])

    return (
        <div className="flex h-full">
            <div className="
                hidden
                md:flex
                flex-col
                gap-y-2
                bg-black
                h-full
                w-[300px]
                p-2
            ">
                <Box>
                    <div className="flex flex-col gap-y-4 px-5 py-4">
                        {
                            routes.map((route) => (
                                <SidebarItem 
                                    key={route.label}
                                    {...route}
                                />
                            ))
                        }
                    </div>
                </Box>
                <Box className="over-flow-y-auto h-full">
                    <Library />
                </Box>

            </div>
            <main className="h-full flex-1 overflow-y-auto py-2 md:pr-2">
                {children}
            </main>
        </div>
    );
}

export default Sidebar;