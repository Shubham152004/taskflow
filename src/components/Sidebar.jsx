import { LuLayoutDashboard, LuListTodo,LuStar,LuTrash2,LuSettings, LuClipboardCheck } from "react-icons/lu";

export default function Sidebar() {
    return (
        <aside className="flex flex-col bg-gray-200 p-4 w-64">
            <button className="flex items-center gap-3 bg-blue-500 text-white rounded p-2 mb-4 hover:bg-blue-600"><LuLayoutDashboard/>Dashboard</button>
            <button className="flex items-center gap-3 bg-blue-500 text-white rounded p-2 mb-4 hover:bg-blue-600"><LuListTodo/>My Tasks</button>
            <button className="flex items-center gap-3 bg-blue-500 text-white rounded p-2 mb-4 hover:bg-blue-600"><LuStar/>Important</button>
            <button className="flex items-center gap-3 bg-blue-500 text-white rounded p-2 mb-4 hover:bg-blue-600"><LuClipboardCheck/>Completed</button>
            <button className="flex items-center gap-3 bg-blue-500 text-white rounded p-2 mb-4 hover:bg-blue-600"><LuTrash2/>Trash</button>
            <button className="flex items-center gap-3 bg-blue-500 text-white rounded p-2 mb-4 hover:bg-blue-600"><LuSettings/>Settings</button>
        </aside>
    );
}