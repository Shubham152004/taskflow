import { LuHouse,LuSearch,LuSettings,LuPhone,LuUserRound, } from "react-icons/lu";

export default function Navbar({ searchTask, setSearchTask ,darkMode, setDarkMode}) {

    const navList = (
        <ul className="flex items-center gap-12">
            <li><a href="#" className="text-blue-500 items-center text-lg flex gap-2 hover:text-gray-300"><LuHouse/>Home</a></li>
            <li><div className="text-blue-500 items-center  text-lg flex gap-2 hover:text-gray-300 "><LuSearch/><input type="text" placeholder="Search tasks..." value={searchTask} onChange={(e) => setSearchTask(e.target.value)} className="border rounded px-2 py-1"/></div></li>
            <li><button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Log in</button></li>
            <li><a href="#" className="text-blue-500 items-center  text-lg flex gap-2 hover:text-gray-300"><LuUserRound/>Profile</a></li>
            <li><a href="#" className="bg-gray-600 text-white rounded p-2 hover:bg-black">🌙</a></li>
            <li><a href="#" className="text-blue-500 items-center  text-lg flex gap-2 hover:text-gray-300"><LuSettings/>Settings</a></li>   
        </ul>
    );
    
    
    
    return (
        <nav className="bg-slate-800 flex justify-between items-center px-6 py-3 shadow-md">
        <a href="#" className="text-white text-2xl font-bold flex items-center gap-1">TaskFlow</a>
        <ul className="flex items-center gap-8">
        <li><a href="#" className="text-slate-200 flex items-center gap-2 hover:text-blue-400 transition-colors"><LuHouse/>Home</a></li>
        <li>
            <div className="flex items-center gap-2 bg-slate-700 rounded-lg px-3 py-1.5">
                <LuSearch className="text-slate-300"/>
                <input type="text" placeholder="Search tasks..." value={searchTask} onChange={(e) => setSearchTask(e.target.value)} className="bg-transparent text-white placeholder-slate-400 outline-none w-40"/>
            </div>
        </li>
        <li><button className="bg-blue-600 text-white rounded-lg px-4 py-1.5 hover:bg-blue-700 transition-colors">Log in</button></li>
        <li><a href="#" className="text-slate-200 flex items-center gap-2 hover:text-blue-400 transition-colors"><LuUserRound/>Profile</a></li>
        <li><button onClick={() => setDarkMode(!darkMode)} className="bg-slate-700 text-white rounded-lg p-2 hover:bg-slate-600 transition-colors">{darkMode ? "☀️ Light" : "🌙 Dark"}</button></li>
        <li><a href="#" className="text-slate-200 flex items-center gap-2 hover:text-blue-400 transition-colors"><LuSettings/>Settings</a></li>
    </ul>
</nav>
    );
}