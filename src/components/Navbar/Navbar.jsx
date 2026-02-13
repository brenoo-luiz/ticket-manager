import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
    <header className="navbar">
        <nav className="navInner">
        <strong className="brand">Support Tickets</strong>

        <div className="navLinks">
            <NavLink
            to="/new"
            className={({ isActive }) =>
                isActive
                ? "navLink navLinkActive"
                : "navLink"
            }
            >
            Form
            </NavLink>

            <NavLink
            to="/tickets"
            className={({ isActive }) =>
                isActive
                ? "navLink navLinkActive"
                : "navLink"
            }
            >
            List
            </NavLink>
        </div>
        </nav>
    </header>
    );
}
