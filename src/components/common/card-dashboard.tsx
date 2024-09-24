export default function CardDashboard({ content }) {
    return (
        <div className="text-center w-full">
            <div className="bg-slate-100 p-4 flex flex-col items-center place-content-center gap-2 rounded-lg h-[138px]">
                <div className="text-xl font-semibold">{content.caption}</div>
                <div className="flex items-center gap-2.5">
                    <div className="w-[30px] h-[30px]">{content.icon}</div>
                    <div className="text-3xl font-semibold text-blue-gray-700">{content.number}</div>
                </div>
                <div>
                    <div className="text-sm font-semibold">{content.title}</div>
                    <div className="text-sm text-blue-gray-150">{content.subtitle}</div>
                </div>

            </div>
            <div className="text-sm text-blue-gray-150 font-medium pt-2">{content.footer}</div>
        </div>
    )
}