import Image from "next/image";
import UserPage from "../pages/user-page"
export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <UserPage />
    </div>

  );
}
