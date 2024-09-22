import Link from "next/link";
import { Search, Settings, CircleHelp, Bell, CircleUser, Menu, } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
export default function Header() {
    return (
        <header className="sticky top-0 flex place-content-between items-end px-6 h-[86px]">

            <span className="inter text-xl font-semibold self-center sm:text-2xl xl:text-3xl ">HarmonyHR</span>

            <nav className="hidden sm:flex">
                <Link href="#" className="text-lg p-4">
                    Home
                </Link>
                <Link
                    href="#"
                    className="text-lg p-4 bg-blue hover:bg-blue rounded-t-lg"
                >
                    My Info
                </Link>
                <Link href="#" className="text-lg p-4 hover:bg-blue">
                    People
                </Link>
                <Link href="#" className="text-lg p-4 hover:bg-blue">
                    Hiring
                </Link>
                <Link href="#" className="text-lg p-4 hover:bg-blue">
                    Reports
                </Link>
                <Link href="#" className="text-lg p-4 hover:bg-blue">
                    Files
                </Link>
            </nav>

            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
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

                        <nav className="grid gap-3">
                            <Link href="#" className="text-lg hover:bg-blue hover:rounded-lg p-4">
                                Home
                            </Link>
                            <Link
                                href="#"
                                className="text-lg p-4 bg-blue hover:bg-blue rounded-lg hover:rounded-lg"
                            >
                                My Info
                            </Link>
                            <Link href="#" className="text-lg p-4 hover:bg-blue hover:rounded-lg">
                                People
                            </Link>
                            <Link href="#" className="text-lg p-4 hover:bg-blue hover:rounded-lg">
                                Hiring
                            </Link>
                            <Link href="#" className="text-lg p-4 hover:bg-blue hover:rounded-lg">
                                Reports
                            </Link>
                            <Link href="#" className="text-lg p-4 hover:bg-blue hover:rounded-lg">
                                Files
                            </Link>
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>

            <div className="w-[395px] relative pb-4">
                <Search className="absolute top-2 left-4 h-4 w-4 sm:left-3.5 sm:top-2.5" />
                <Input
                    type="search"
                    placeholder="Search"
                    className="py-2 pr-4 sm:pl-14 text-lg h-8 placeholder:text-foreground border-black w-12 sm:h-[38px] md:w-[200px] xl:w-[395px]"
                />
            </div>

            <div className="hidden sm:flex gap-x-6 pb-4 items-center">
                <Settings className="h-6 w-6" />
                <CircleHelp className="h-6 w-6" />
                <Bell className="h-6 w-5" />
            </div>
            <CircleUser className="h-[38px] w-[38px]" />
        </header>
    );
}
