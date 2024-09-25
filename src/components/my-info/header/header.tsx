import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, EllipsisVertical, Settings } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderMyInfo() {
    return (
        <div className="bg-blue-gray grid grid-cols-4 h-[157px] lg:h-[184px] items-end pt-6">
            <div className="hidden lg:flex w-[150px] h-[150px] bg-white rounded-full"></div>

            <div className="w-[60px] h-[60px] lg:hidden bg-white rounded-full justify-self-center self-start"></div>
            <span className="font-semibold text-xl col-start-2 col-span-2 justify-self-start self-start lg:self-center">
                Alexandra Kuibyshevskaya
            </span>
            <EllipsisVertical className="lg:hidden w-4 h-4 col-start-4 justify-self-center self-start" />

            <div className="lg:flex hidden self-center justify-self-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="col-start-4 w-[162px] text-sm font-normal bg-transparent border-blue-gray-300 p-2 h-[33px] rounded-lg mr-4"
                        >
                            Request a Change
                            <ChevronDown className="w-4 h-4 stroke-blue-gray-700 ml-2" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem>Request</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button
                    variant="outline"
                    className="col-start-4 w-[65px] text-sm font-normal bg-transparent border-blue-gray-300 p-2 h-[33px] rounded-lg"
                >
                    <Settings className="w-4 h-4 stroke-blue-gray-700" />
                    <ChevronDown className="w-4 h-4 stroke-blue-gray-700 ml-2" />
                </Button>
            </div>

            <div className="col-span-5 flex overflow-x-auto lg:col-start-2 lg:col-end-5">
                <nav className="flex text-sm gap-4 font-medium items-center text-center">
                    <Link
                        href="#"
                        className="w-[90px] py-4 hover:bg-white hover:rounded-t-lg"
                    >
                        Personal
                    </Link>
                    <Link
                        href="#"
                        className="w-[90px] py-4 hover:bg-white hover:rounded-t-lg"
                    >
                        Job
                    </Link>
                    <Link
                        href="#"
                        className="w-[90px] py-4 whitespace-pre bg-white hover:bg-white rounded-t-lg hover:rounded-t-lg"
                    >
                        Time Off
                    </Link>
                    <Link
                        href="#"
                        className="w-[90px] py-4 hover:bg-white hover:rounded-t-lg"
                    >
                        Emergency
                    </Link>
                    <Link
                        href="#"
                        className="w-[90px] py-4 hover:bg-white hover:rounded-t-lg"
                    >
                        Documents
                    </Link>
                    <Link
                        href="#"
                        className="w-[90px] py-4 hover:bg-white hover:rounded-t-lg"
                    >
                        Notes
                    </Link>
                    <Link
                        href="#"
                        className="w-[90px] py-4 hover:bg-white hover:rounded-t-lg"
                    >
                        Benefits
                    </Link>
                    <Link
                        href="#"
                        className="w-[90px] py-4 hover:bg-white hover:rounded-t-lg"
                    >
                        Trainig
                    </Link>
                    <Link
                        href="#"
                        className="w-[90px] py-4 hover:bg-white hover:rounded-t-lg"
                    >
                        Assets
                    </Link>
                    <Button
                        variant="ghost"
                        className="w-[90px]  h-full hover:bg-white hover:rounded-t-lg"
                    >
                        <div className="flex">
                            More
                            <ChevronDown className="items-center w-4 h-4 stroke-blue-gray-700 ml-2" />
                        </div>
                    </Button>
                </nav>
            </div>
        </div>
    );
}
