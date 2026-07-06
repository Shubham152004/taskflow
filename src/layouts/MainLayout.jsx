import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useState } from "react";



export default function MainLayout({ children,searchTask,setSearchTask,darkMode,setDarkMode }) {

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar searchTask={searchTask} setSearchTask={setSearchTask} darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex flex-1 min-h-screen">
                <Sidebar darkMode={darkMode} setSearchTask={setSearchTask} />
                <main className="flex-1 p-4 dark:bg-black dark:text-white bg-slate-100">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}