import { LuLayoutDashboard, LuListTodo,LuStar,LuTrash2,LuSettings, LuClipboardCheck } from "react-icons/lu";

export default function Sidebar({ darkMode }) {
    return (
        <aside className={`flex flex-col ${darkMode ? "dark:bg-gray-800" : "bg-white"} border-r border-slate-200 p-4 w-60 gap-1`}>
    {[
        { icon: <LuLayoutDashboard/>, label: "Dashboard" },
        { icon: <LuListTodo/>, label: "My Tasks" },
        { icon: <LuStar/>, label: "Important" },
        { icon: <LuClipboardCheck/>, label: "Completed" },
        { icon: <LuTrash2/>, label: "Trash" },
        { icon: <LuSettings/>, label: "Settings" },
    ].map((item) => (
        <button key={item.label} className={`flex items-center gap-3 ${darkMode ? "dark:text-gray-300 hover:dark:bg-gray-600" : "text-slate-600 hover:bg-blue-50"} rounded-lg px-3 py-2.5 transition-colors text-sm font-medium`}>
            {item.icon}{item.label}
        </button>
    ))}
</aside>
    );
}