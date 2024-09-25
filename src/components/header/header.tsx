import {
    Search,
    Settings,
    CircleHelp,
    Bell,
    CircleUser,
    Menu,
} from "lucide-react";
import Navbar from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
    return (
        <header className="top-0 flex px-6 h-[50px] items-center place-content-between lg:items-end md:h-[86px]">
            <span className="inter font-semibold self-center sm:text-xl xl:text-3xl ">
                HarmonyHR
            </span>

            <Navbar className="hidden lg:flex md:self-end" />

            <div className="flex xl:hidden lg:pb-4">
                <Button variant="outline" className="w-12 h-8 border-black">
                    <Search className="h-4 w-4 stroke-blue-gray-700" />
                </Button>
            </div>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" className="lg:hidden p-0 hover:bg-transparent">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>

                <SheetContent>
                    <div className="pt-10">
                        <div className="flex gap-x-6 pb-4 justify-center">
                            <Settings className="h-6 w-6" />
                            <CircleHelp className="h-6 w-6" />
                            <Bell className="h-6 w-5" />
                        </div>

                        <Navbar className="flex flex-col flex-1 gap-3" />
                    </div>
                </SheetContent>
            </Sheet>

            <div className="hidden xl:flex relative pb-4 basis-[28.4%]">
                <Search className="absolute h-4 w-4 left-3.5 top-2.5 stroke-blue-gray-700" />
                <Input
                    type="search"
                    placeholder="Search"
                    className="py-2 pr-4 pl-14 text-lg h-[38px] placeholder:text-foreground border-black"
                />
            </div>

            <div className="flex lg:pb-4">
                <div className="hidden lg:flex gap-x-6 self-center pr-4">
                    <Settings className="h-6 w-6 stroke-blue-gray-700" />
                    <CircleHelp className="h-6 w-6 stroke-blue-gray-700" />
                    <Bell className="h-6 w-5 stroke-blue-gray-700" />
                </div>

                <CircleUser className="h-[38px] w-[38px] stroke-blue-gray-700" />

            </div>
        </header>
    );
}
