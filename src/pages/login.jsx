import { useState } from "react";
import { loginUser } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { LuMail, LuLock } from "react-icons/lu";

export default function Login({darkMode}) {
    const navigate = useNavigate();
    const { token, login } = useAuth();

    const [formData, setFormData] = useState({ email: "", password: "" });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            localStorage.setItem("token",response.data.token);
            login(response.data.user, response.data.token);
            alert("Login Successful!");
            navigate("/");
        } catch (error) {
            alert(error.response?.data?.message || "Login Failed");
        }
    }

    if (token) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className={`min-h-screen flex items-center justify-center px-4 transition-colors ${darkMode ? "bg-slate-900" : "bg-blue-50"}`}>
            <div className="w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className={`text-3xl font-bold text-slate-800 ${darkMode? "dark:text-white" : "text-black"}`}>TaskFlow</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back — let's get productive</p>
                </div>

                <form
                    onSubmit={handleSubmit}
                   className={`rounded-xl shadow-md p-6 flex flex-col gap-4 border ${darkMode? "bg-slate-800 border-slate-700": "bg-white border-slate-200"}`}
                >
                    <div className={`-mx-6 -mt-6 mb-2 px-6 py-4 rounded-t-xl text-white text-lg font-semibold text-center transition-colors ${darkMode ? "bg-blue-600" : "bg-slate-800"}`}>
                        Log in to your account
                    </div>

                    <label className={`text-sm font-semibold ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
                        Email
                        <div className={`flex items-center gap-2 mt-1 rounded-lg px-3 py-2 border focus-within:ring-2 focus-within:ring-blue-400 ${darkMode ? "bg-slate-900 border-slate-600": "bg-white border-slate-300"}`}>
                            <LuMail className="text-slate-400 shrink-0" />
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full bg-transparent outline-none placeholder-slate-400 ${darkMode ? "text-white" : "text-slate-800"}`}
                            />
                        </div>
                    </label>

                    <label className={`text-sm font-semibold ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
                        Password
                        <div className={`flex items-center gap-2 mt-1 rounded-lg px-3 py-2 border focus-within:ring-2 focus-within:ring-blue-400 ${darkMode? "bg-slate-900 border-slate-600": "bg-white border-slate-300"}`}>
                            <LuLock className="text-slate-400 shrink-0" />
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full bg-transparent outline-none placeholder-slate-400 ${darkMode ? "text-white" : "text-slate-800"}`}                   
                            />
                        </div>
                    </label>

                    <button
                        type="submit"
                        className="mt-2 bg-blue-600 font-semibold text-white rounded-lg px-4 py-2.5 hover:bg-blue-700 transition-colors"
                    >
                        Log in
                    </button>

                    <p className={`text-sm text-center mt-2 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                        Don't have an account?{" "}
                        <Link to="/register" className={`font-semibold hover:underline ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}