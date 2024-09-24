import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
    Phone,
    Mail,
    Twitter,
    Linkedin,
    Facebook,
    Hash,
    Clock,
    Users,
    Globe,
    MapPin,
    CircleUserRound,
} from "lucide-react";

const dataReports = ["Shane", "Nathan", "Mitchel", "Philip", "4 More..."]

export default function SidebarMyInfo() {
    return (
        <div className="flex flex-col gap-4">
            <Card className="font-medium text-sm pt-6">
                <CardContent className="flex flex-col gap-4">

                    <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 stroke-blue-gray-700" />
                        <span> 07911 654321</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 stroke-blue-gray-700" />
                        <span>avd.yana@videorollnet</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Linkedin className="h-4 w-4 stroke-blue-gray-700" />
                        <Facebook className="h-4 w-4 stroke-blue-gray-700" />
                        <Twitter className="h-4 w-4 stroke-blue-gray-700" />
                    </div>
                </CardContent>
            </Card>

            <Card className="font-medium text-sm pt-6">
                <CardTitle className="px-6 pb-4">Hire date</CardTitle>
                <CardContent className="flex flex-col gap-2">
                    <span>Sep. 3,2020</span>
                    <span>3y - 9m - 20d</span>
                </CardContent>
            </Card>

            <Card className="font-medium text-sm pt-6">
                <CardContent>
                    <div className="flex items-center gap-2 pb-2">
                        <Hash className="h-4 w-4 stroke-blue-gray-700" />
                        <span>5</span>
                    </div>

                    <div className="flex items-center gap-2 pb-2">
                        <Clock className="h-4 w-4 stroke-blue-gray-700" />
                        <span>Full-Time</span>
                    </div>

                    <div className="flex items-center gap-2 pb-2">
                        <Users className="h-4 w-4 stroke-blue-gray-700 gap-2" />
                        <span>Operations</span>
                    </div>

                    <div className="flex items-center gap-2 pb-2">
                        <Globe className="h-4 w-4 stroke-blue-gray-700" />
                        <span>Europe</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 stroke-blue-gray-700" />
                        <span>London, UK</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="font-medium text-sm pt-6">
                <CardTitle className="px-6 pb-4">Direct Reports</CardTitle>

                <CardContent className="flex flex-col gap-2">
                    {dataReports.map((i, index) => {
                        return (
                            <div className="flex items-center gap-2" key={index}>
                                <CircleUserRound className="h-4 w-4 stroke-blue-gray-700" />
                                <span>{i}</span>
                            </div>
                        );
                    })}
                </CardContent>
            </Card>
        </div>
    );
}
