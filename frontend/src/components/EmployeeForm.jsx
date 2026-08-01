import { useState } from "react";
import "../styles/EmployeeForm.css";

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const employee = {
      name,
      email,
      department,
    };

    addEmployee(employee);

    setName("");
    setEmail("");
    setDepartment("");
  }

  return (
    <div className="form-container">
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Employee Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;