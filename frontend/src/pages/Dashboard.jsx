function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <p>Welcome to the Employee Management System 👋</p>

      <div className="cards">

        <div className="card">
          <h2>Total Employees</h2>
          <h3>2</h3>
        </div>

        <div className="card">
          <h2>Departments</h2>
          <h3>2</h3>
        </div>

        <div className="card">
          <h2>Status</h2>
          <h3>Active</h3>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;