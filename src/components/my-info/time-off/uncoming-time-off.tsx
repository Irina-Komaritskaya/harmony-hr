import { Clock, Cross, PiggyBank } from "lucide-react";
import Separator from "@/components/common/separator";

export default function UngomingTimeOff() {
    return (
        <div>
            <div className="flex gap-2 pb-4">
                <Clock className="w-4 h-4 stroke-blue-gray-500" />
                <h3 className="font-semibold text-sm text-blue-gray-700">Upcoming Time Off</h3>
            </div>


            <Separator />

            <div>
                <div className="flex gap-3.5 py-4">
                    <Cross className="w-[30px] h-[30px] stroke-blue-gray-700" />
                    <div className="flex flex-col gap-1">
                        <span className="font-medium text-sm">Jan 27</span>
                        <span className="font-medium text-sm relative pl-4 before:inline-block before:absolute before:top-1/4 before:left-0 before:w-2 before:h-2 before:bg-black before:rounded-full">
                            1 day of Sick
                        </span>
                    </div>
                </div>

                <Separator />

                <div className="flex gap-3.5 py-4">
                    <PiggyBank className="w-[30px] h-[30px] stroke-blue-gray-700" />
                    <div className="flex flex-col gap-1">
                        <span className="font-medium text-sm">Jul 4</span>
                        <span className="font-medium text-sm">Independence Day</span>
                    </div>
                </div>
                <Separator />
            </div>
        </div >
    )

}