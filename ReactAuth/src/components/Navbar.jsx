import {Link, useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const {isAuthenticated, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            {isAuthenticated? (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
};

export default Navbar;