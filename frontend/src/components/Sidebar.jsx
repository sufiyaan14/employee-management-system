import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <ul>

        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/employees">Employees</NavLink>
        </li>

        <li>
          <NavLink to="/employees">Add Employee</NavLink>
        </li>

        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;