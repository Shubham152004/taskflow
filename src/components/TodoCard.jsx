
export default function TodoCard({ id, title, description, priority, dueDate, isCompleted, onDelete, onEdit, onToggleComplete }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-sm text-gray-500 mb-2">Priority: {priority}</p>
            <p className="text-sm text-gray-500">Due Date: {dueDate}</p>
            <div className="flex gap-3 mt-4">
                <button onClick={onToggleComplete} className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">{isCompleted ? "Mark as Incomplete" : "Mark as Completed"}</button>
                <button onClick={onEdit} className="bg-blue-500 text-white rounded p-2 hover:bg-yellow-600">Edit</button>
                <button onClick={onDelete} className="bg-red-500 text-white rounded p-2 hover:bg-red-600">Delete</button>
            </div>
        </div>
    );
}