import Link from "next/link";
export default function Navbar({ className }) {
    return (
        <nav className={className} >
            <Link href="#" className="text-lg p-4 hover:bg-blue-gray hover:rounded-t-lg">
                Home
            </Link>
            <Link
                href="#"
                className="text-lg p-4 bg-blue-gray hover:bg-blue-gray rounded-t-lg"
            >
                My Info
            </Link>
            <Link href="#" className="text-lg p-4 hover:bg-blue-gray hover:rounded-t-lg">
                People
            </Link>
            <Link href="#" className="text-lg p-4 hover:bg-blue-gray hover:rounded-t-lg">
                Hiring
            </Link>
            <Link href="#" className="text-lg p-4 hover:bg-blue-gray hover:rounded-t-lg">
                Reports
            </Link>
            <Link href="#" className="text-lg p-4 hover:bg-blue-gray hover:rounded-t-lg">
                Files
            </Link>
        </nav>
    )
} 