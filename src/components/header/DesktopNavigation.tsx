
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface DesktopNavigationProps {
  onOpenContact: () => void;
}

const DesktopNavigation = ({ onOpenContact }: DesktopNavigationProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent hover:text-yooblue-500",
                  isActive("/about") && "text-yooblue-500 font-medium"
                )}
              >
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/investors">
              <NavigationMenuLink 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent hover:text-yooblue-500",
                  isActive("/investors") && "text-yooblue-500 font-medium"
                )}
              >
                Investors
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/developers">
              <NavigationMenuLink 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent hover:text-yooblue-500",
                  isActive("/developers") && "text-yooblue-500 font-medium"
                )}
              >
                Developers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/partners">
              <NavigationMenuLink 
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent hover:text-yooblue-500",
                  isActive("/partners") && "text-yooblue-500 font-medium"
                )}
              >
                Partners
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              className="bg-yooblue-500 hover:bg-yooblue-600 text-white rounded-lg ml-2 px-6"
              size="sm"
              onClick={onOpenContact}
            >
              Contact Us
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNavigation;
