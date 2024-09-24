import CardDashboard from "@/components/common/card-dashboard";
import HeaderTimeOff from "@/components/my-info/time-off/header";
import UncomingTimeOff from "@/components/my-info/time-off/uncoming-time-off";
import HistoryTimeOff from "@/components/my-info/time-off/history";
import { Cross, Image, FileClock } from "lucide-react";

export default function TimeOffPage() {
    return (
        <div>
            <HeaderTimeOff />
            <div className="flex gap-12">
                <CardDashboard content={cardContent.sick} />
                <CardDashboard content={cardContent.holiday} />
                <CardDashboard content={cardContent.comp} />
            </div>
            <UncomingTimeOff />
            <HistoryTimeOff />
        </div>
    );
}


const cardContent = {
    sick: {
        caption: "Sick",
        icon: <Cross className="w-[30px] h-[30px] stroke-blue-gray-700" />,
        number: "3",
        title: "Days Available",
        subtitle: "1 day scheduled",
        footer: "Sick Full-Time",
    },
    holiday: {
        caption: "Annual Leave",
        icon: <Image className="w-[30px] h-[30px] stroke-blue-gray-700" />,
        number: "10.3",
        title: "Days Available",
        subtitle: "",
        footer: "Holiday Full-Time",
    },
    comp: {
        caption: "Comp/in Lieu Time",
        icon: <FileClock className="w-[30px] h-[30px] stroke-blue-gray-700" />,
        number: "0",
        title: "Days Available",
        subtitle: "",
        footer: "Comp/in Lieu Time Flexible Policy",
    },
};