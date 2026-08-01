import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

function Employees({ employees, addEmployee, deleteEmployee }) {
  return (
    <>
      <EmployeeForm addEmployee={addEmployee} />

      <EmployeeTable
        employees={employees}
        deleteEmployee={deleteEmployee}
      />
    </>
  );
}

export default Employees;