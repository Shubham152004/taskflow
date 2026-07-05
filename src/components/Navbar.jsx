import { LuHouse,LuSearch,LuSettings,LuPhone,LuUserRound, } from "react-icons/lu";

export default function Navbar() {

    const navList = (
        <ul className="flex items-center gap-12">
            <li><a href="#" className="text-blue-500 items-center text-lg flex gap-2 hover:text-gray-300"><LuHouse/>Home</a></li>
            <li><div className="text-blue-500 items-center  text-lg flex gap-2 hover:text-gray-300 "><LuSearch/><input type="text" placeholder="Search tasks..."className="border rounded px-2 py-1"/></div></li>
            <li><button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Log in</button></li>
            <li><a href="#" className="text-blue-500 items-center  text-lg flex gap-2 hover:text-gray-300"><LuUserRound/>Profile</a></li>
            <li><a href="#" className="bg-gray-600 text-white rounded p-2 hover:bg-black">🌙</a></li>
            <li><a href="#" className="text-blue-500 items-center  text-lg flex gap-2 hover:text-gray-300"><LuSettings/>Settings</a></li>   
        </ul>

    )
    return (
        <nav className="bg-gray-700 flex justify-between gap-x-12 items-center p-4">
            <div><a href="#" className="text-blue-200 text-2xl font-bold flex items-center hover:text-gray-300">TaskFlow</a></div>
            <div className="flex justify-between items-center">
                {navList}
            </div>
        </nav>
    );
}