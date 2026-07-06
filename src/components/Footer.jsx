export default function Footer() {
    return (
        <footer className="bg-gray-800 p-4 text-white">
            <div className="text-center text-sm">
                &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
            </div>
        </footer>
    );
}