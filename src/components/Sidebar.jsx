import { LuLayoutDashboard, LuTrash2,LuSettings, LuCalendarX, LuCalendarDays, LuInbox } from "react-icons/lu";
import {Link} from "react-router-dom";

export default function Sidebar({ darkMode }) {
    return (
        <aside className={`flex flex-col ${darkMode ? "dark:bg-gray-800" : "bg-white"} border-r border-slate-200 p-4 w-60 gap-1`}>
            <ul className="flex flex-col gap-2">
                <li>    
                <Link to="/"><a className={`flex items-center gap-2 p-2 rounded hover:bg-blue-500 transition-colors ${darkMode ? "dark:text-white" : "text-slate-800"}`}><LuLayoutDashboard/>Dashboard</a></Link>
                </li>
                <li>
                <Link to="/tasks"><a className={`flex items-center gap-2 p-2 rounded hover:bg-blue-500 transition-colors ${darkMode ? "dark:text-white" : "text-slate-800"}`}><LuInbox/>Inbox</a></Link>
                </li>
                <li>
                <Link to="/Today"><a className={`flex items-center gap-2 p-2 rounded hover:bg-blue-500 transition-colors ${darkMode ? "dark:text-white" : "text-slate-800"}`}><LuCalendarX/>Today</a></Link>
                </li>
                <li>
                <Link to="/Upcoming"><a className={`flex items-center gap-2 p-2 rounded hover:bg-blue-500 transition-colors ${darkMode ? "dark:text-white" : "text-slate-800"}`}><LuCalendarDays/>Upcoming</a></Link>
                </li>
                <li>
                <Link to="/Trash"><a className={`flex items-center gap-2 p-2 rounded hover:bg-blue-500 transition-colors ${darkMode ? "dark:text-white" : "text-slate-800"}`}><LuTrash2/>Trash</a></Link>
                </li>
                <li>
                <Link to="/Settings"><a className={`flex items-center gap-2 p-2 rounded hover:bg-blue-500 transition-colors ${darkMode ? "dark:text-white" : "text-slate-800"}`}><LuSettings/>Settings</a></Link>
                </li>
            </ul>
</aside>
    );
}