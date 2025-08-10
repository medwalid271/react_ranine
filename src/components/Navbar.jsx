import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
    return (
        <div className='flex justify-around'>
            <div className="">logo</div>
            <NavigationMenu>
                <NavigationMenuList className="flex gap-7">
                    <NavigationMenuItem>
                        Accueil
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        a propos
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Services
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Contatez-nous
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Navbar