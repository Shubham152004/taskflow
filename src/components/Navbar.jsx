import { LuHouse,LuSearch,LuSettings,LuPhone,LuUserRound, LuLogIn, } from "react-icons/lu";
import {Link,useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ searchTask, setSearchTask ,darkMode, setDarkMode}) {
    const {user,token,logout} = useAuth();
    const navigate=useNavigate();
    function handleLogout() {
        logout();
        navigate("/login");
    }
    return (
        <nav className="bg-slate-800 flex justify-between items-center px-6 py-3 shadow-md">
        <a href="#" className="text-white text-2xl font-bold flex items-center gap-1">TaskFlow</a>
        <ul className="flex items-center gap-8">
        <Link to="/"><a className="text-slate-200 flex items-center gap-2 hover:text-blue-400 transition-colors"><LuHouse/>Home</a></Link>
        <li>
            <div className="flex items-center gap-2 bg-slate-700 rounded-lg px-3 py-1.5">
                <LuSearch className="text-slate-300"/>
                <input type="text" placeholder="Search tasks..." value={searchTask} onChange={(e) => setSearchTask(e.target.value)} className="bg-transparent text-white placeholder-slate-400 outline-none w-40"/>
            </div>
        </li>
        {token ? (
                <button onClick={handleLogout} className="text-slate-200 flex items-center gap-2 hover:text-blue-400 transition-colors">
                    Logout
                </button>
            ) : (
                <>
                    <li><Link to="/login"><p className="text-slate-200 flex items-center gap-2 hover:text-blue-400 transition-colors"><LuLogIn/> Login</p></Link></li>
                    <li><Link to="/register"><p className="text-slate-200 flex items-center gap-2 hover:text-blue-400 transition-colors"><LuUserRound/>Register</p></Link></li>
                </>
            )}
        
        <li><button onClick={() => setDarkMode(!darkMode)} className="bg-slate-700 text-white rounded-lg p-2 hover:bg-slate-600 transition-colors">{darkMode ? "☀️ Light" : "🌙 Dark"}</button></li>
        <li><a href="#" className="text-slate-200 flex items-center gap-2 hover:text-blue-400 transition-colors"><LuSettings/>Settings</a></li>
    </ul>
</nav>
    );
}