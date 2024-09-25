import { FolderClock, MoveDown } from "lucide-react";
import { Combobox } from "@/components/common/combobox";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function HistoryTimeOff() {
    return (
        <div>
            <div>
                <FolderClock />
                <h3>History</h3>
            </div>
            <div className="flex pb-2">
                <Combobox
                    content={contentCombobox}
                    startValue={contentCombobox[0].value}
                    placeholder="rhf"
                    classNameButton={"w-[256px] mr-4"}
                />
                <Combobox
                    content={contentCombobox}
                    startValue={contentCombobox[1].value}
                    placeholder="rhf"
                    classNameButton={"w-[96px]"}
                />
                <div className="ml-auto"> <Combobox
                    content={contentCombobox}
                    startValue={contentCombobox[2].value}
                    placeholder="rhf"
                    classNameButton={"w-[176px]"}
                /></div>

            </div>


            <Table className="text-sm font-medium">
                <TableHeader className="bg-blue-gray">
                    <TableRow>
                        <TableHead className="text-black flex items-center">
                            Date
                            <MoveDown className="h-4 w-4 stroke-blue-gray-600 ml-1" />
                        </TableHead>
                        <TableHead className="text-black">
                            Description
                        </TableHead>
                        <TableHead className="text-black">
                            Used Days (-)
                        </TableHead>
                        <TableHead className="text-black">
                            Earned Days (+)
                        </TableHead>
                        <TableHead className="text-black">Balance</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {contentTable.map((item) => (
                        <TableRow
                            className="border-b-2 hover:bg-blue-gray"
                            key={item.id}
                        >
                            <TableCell className="">{item.date}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell className="">{item.used_days}</TableCell>
                            <TableCell className="">
                                {item.earned_days}
                            </TableCell>
                            <TableCell className="">{item.balance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

const contentCombobox = [
    {
        value: "sick",
        label: "Sick",
    },
    {
        value: "all",
        label: "All",
    },
    {
        value: "balance history",
        label: "Balance History",
    },
];

const contentTable = [
    {
        id: 1,
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: "",
        earned_days: "3.0",
        balance: "3.0",
    },
    {
        id: 2,
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: "-6",
        earned_days: "",
        balance: "3.0",
    },
    {
        id: 3,
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: "",
        earned_days: "3.0",
        balance: "3.0",
    },
    {
        id: 4,
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: "",
        earned_days: "3.0",
        balance: "3.0",
    },
    {
        id: 5,
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: "-6",
        earned_days: "",
        balance: "3.0",
    },
    {
        id: 6,
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: "",
        earned_days: "3.0",
        balance: "3.0",
    },
];
