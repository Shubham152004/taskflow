import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useState } from "react";



export default function MainLayout({ children,searchTask,setSearchTask }) {

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar searchTask={searchTask} setSearchTask={setSearchTask} />
            <div className="flex flex-1 min-h-screen">
                <Sidebar />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}