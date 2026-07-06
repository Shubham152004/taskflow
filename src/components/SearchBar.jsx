export default function SearchBar({ searchTask, setSearchTask }) {
    const handleSearchChange = (e) => {
        setSearchTask(e.target.value);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchTask}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}