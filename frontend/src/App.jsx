import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Settings from "./pages/Settings";

const API_BASE_URL = import.meta.env.VITE_API_BASE;

function App() {
  const [employees, setEmployees] = useState([]);

  async function fetchEmployees() {
    const response = await fetch(`${API_BASE_URL}/employees`);
    const data = await response.json();
    setEmployees(data);
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function addEmployee(employee) {
    await fetch(`${API_BASE_URL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    fetchEmployees();
  }

  async function deleteEmployee(id) {
    await fetch(`${API_BASE_URL}/employees/${id}`, {
      method: "DELETE",
    });

    fetchEmployees();
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route
              path="/employees"
              element={
                <Employees
                  employees={employees}
                  addEmployee={addEmployee}
                  deleteEmployee={deleteEmployee}
                />
              }
            />

            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;