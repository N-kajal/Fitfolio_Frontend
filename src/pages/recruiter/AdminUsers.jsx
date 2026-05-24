import { useEffect, useState } from "react";
import { syncAdminUsers, getAdminUsers } from "../../service/adminService";
import "../../styles/adminusers.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/Fitfoliologo.png";


const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        await syncAdminUsers();
        const res = await getAdminUsers();
        setUsers(res.data);
      } catch (err) {
        console.error("ADMIN ERROR:", err);
      }
    };
    loadUsers();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* ✅ ADMIN NAVBAR */}
      <nav className="admin-navbar">
        <img
          src={logo}
          alt="FitFolio"
          className="admin-logo"
          onClick={() => navigate("/adminuser")}
        />

        <button className="admin-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* PAGE CONTENT */}
      <div className="admin-users-container">
        <h2>Admin Users</h2>

        <table className="admin-users-table">
          <thead>
            <tr>
              <th>Auto ID</th>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.userid}</td>
                <td>{u.username ?? "-"}</td>
                <td>{u.email}</td>
                <td>
                  <span
                    className={`role ${(u.role || "unknown").toLowerCase()}`}
                  >
                    {u.role ?? "UNKNOWN"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};


export default AdminUsers;
