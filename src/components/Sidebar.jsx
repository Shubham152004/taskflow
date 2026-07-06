import { LuLayoutDashboard, LuListTodo,LuStar,LuTrash2,LuSettings, LuClipboardCheck } from "react-icons/lu";

export default function Sidebar() {
    return (
        <aside className="flex flex-col bg-white border-r border-slate-200 p-4 w-60 gap-1">
    {[
        { icon: <LuLayoutDashboard/>, label: "Dashboard" },
        { icon: <LuListTodo/>, label: "My Tasks" },
        { icon: <LuStar/>, label: "Important" },
        { icon: <LuClipboardCheck/>, label: "Completed" },
        { icon: <LuTrash2/>, label: "Trash" },
        { icon: <LuSettings/>, label: "Settings" },
    ].map((item) => (
        <button key={item.label} className="flex items-center gap-3 text-slate-600 rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-medium">
            {item.icon}{item.label}
        </button>
    ))}
</aside>
    );
}