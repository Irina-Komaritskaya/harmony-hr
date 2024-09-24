import Header from "@/components/header/header";
import HeaderMyInfo from "@/components/my-info/header/header";
import SidebarMyInfo from "@/components/my-info/sidebar/sidebar";
import TimeOffPage from "./time-off-page";
export default function UserPage() {
    return (
        <>
            <Header />
            <HeaderMyInfo />
            <div className="flex"> <div className="hidden lg:flex w-[225px]">
                <SidebarMyInfo />
            </div>

                <div className="w-[1047px]">
                    <TimeOffPage />
                </div></div>

        </>


    );
}