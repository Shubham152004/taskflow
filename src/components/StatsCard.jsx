export default function StatsCard({ title, value,icon }) {
    return (
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg shadow-blue-500 transition-shadow duration-100">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-3xl font-bold">{value}</p>
            
        </div>
    );
}