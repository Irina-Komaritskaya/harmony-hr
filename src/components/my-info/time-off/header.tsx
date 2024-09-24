import { Button } from "@/components/ui/button";
import Separator from "@/components/common/separator";
import { FileClock } from "lucide-react";

export default function HeaderTimeOff() {
    return (
        <div>
            <div className="h-[106px] lg:h-[84px] flex items-end p-4 xl:p-6 lg:p-4 place-content-end lg:place-content-between">
                <div className="lg:flex gap-3 items-center hidden">
                    <FileClock className="w-4 h-4" />
                    <h1 className="text-md lg:text-xl font-medium text-blue-gray-500">
                        Time Off
                    </h1>
                </div>

                <div className="gap-2 flex flex-col lg:flex-row lg:gap-[30px] xl:items-center items-end">
                    <div className="flex text-sm font-medium gap-2 ">
                        <span>Accrual Level Start Date </span>
                        <span className="text-blue-gray-300">
                            &nbsp;03/09-2020
                        </span>
                    </div>
                    <Button
                        variant="outline"
                        className="text-sm font-normal border-black p-2 h-[33px] w-[149px]"
                    >
                        Add Time Off Policy
                    </Button>
                </div>
            </div>
            <Separator />
        </div>
    );
}
