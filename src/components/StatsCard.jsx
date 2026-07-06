export default function StatsCard({ title, value, icon, darkMode }) {
    return (
        <div className={`flex flex-col items-center justify-center w-40 h-44 ${darkMode ? "dark:bg-gray-800" : "bg-white"} p-4 rounded-xl shadow-sm hover:shadow-lg border border-blue-300 transition-shadow duration-200`}>
            <div className={`text-3xl mb-3 ${darkMode ? "dark:text-blue-400" : "text-blue-600"}`}>{icon}</div>
            <h3 className={`text-sm font-bold ${darkMode ? "dark:text-gray-300" : "text-slate-500"} text-center`}>{title}</h3>
            <p className={`text-3xl font-bold ${darkMode ? "dark:text-blue-400" : "text-blue-700"} mt-1`}>{value}</p>
        </div>
    );
}