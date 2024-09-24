import Header from "@/components/ui/header/header";
import HeaderMyInfo from "@/components/ui/my-info/header/header";
import SidebarMyInfo from "@/components/ui/my-info/sidebar/sidebar";
export default function UserPage() {
    return (
        <>
            <Header />
            <HeaderMyInfo />
            <div className="w-[225px]">
                <SidebarMyInfo />
            </div>

        </>


    );
}