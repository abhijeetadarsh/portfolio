"use client";
import { Menu, Mail } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ToggleThemeButton from "@/components/theme";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 shadow-lg">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-6">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (section) => (
                <NavigationMenuItem key={section}>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} transition-transform transform hover:scale-105 text-gray-800 font-semibold`}
                    href={`#${section.toLowerCase()}`}
                  >
                    {section}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button
            variant="outline"
            className="hidden lg:flex h-10 items-center px-4 rounded-full text-gray-800 bg-white shadow-sm hover:bg-gray-100 transition duration-150"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="h-10 w-10 p-0 md:hidden rounded-full hover:bg-gray-100 transition duration-150"
              >
                <Menu className="h-6 w-6 text-gray-800" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-white shadow-lg rounded-l-lg"
            >
              <SheetHeader>
                <SheetTitle className="text-lg font-bold text-gray-800">
                  Navigation
                </SheetTitle>
                <SheetDescription>
                  <nav className="flex flex-col space-y-4 mt-4 text-gray-700">
                    {[
                      "About",
                      "Skills",
                      "Projects",
                      "Experience",
                      "Contact",
                    ].map((section) => (
                      <a
                        key={section}
                        href={`#${section.toLowerCase()}`}
                        className="text-base font-medium hover:underline hover:text-indigo-600 transition duration-150"
                      >
                        {section}
                      </a>
                    ))}
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <ToggleThemeButton />
        </div>
      </div>
    </header>
  );
}
