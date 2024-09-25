import Header from "@/components/header/header";
import HeaderMyInfo from "@/components/my-info/header/header";
import SidebarMyInfo from "@/components/my-info/sidebar/sidebar";
import TimeOffPage from "./time-off-page";
export default function UserPage() {
    return (
        <>
            <Header />
            <HeaderMyInfo />
            <div className="bg-slate-100 grid grid-cols-4">
                <div className="hidden lg:flex w-[225px] justify-items-center justify-self-end mr-4 -mt-3.5">
                    <SidebarMyInfo />
                </div>
                <div className="col-span-4 lg:grid-start-2 lg:col-span-3 max-w-[1047px] min-w-[360px] bg-background pb-20">
                    <TimeOffPage />
                </div>
            </div>
        </>
    );
}
