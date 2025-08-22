import  { useEffect, useState } from "react";
 

function getUsersFromLocalStorage() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

function getLoggedInUser() {
  const user = localStorage.getItem("loggedInUser");
  return user ? JSON.parse(user) : null;
}

// Helper to group login/logout counts by date
function getLoginLogoutData(users) {
  const data = {};
  users.forEach((user) => {
    const date = new Date(user.timestamp).toLocaleDateString();
    if (!data[date]) data[date] = { date, login: 0, logout: 0 };
    if (user.status === "login") data[date].login += 1;
    else if (user.status === "logout") data[date].logout += 1;
  });
  return Object.values(data);
}

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    setUsers(getUsersFromLocalStorage());
    setLoggedInUser(getLoggedInUser());
  }, []);

  

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

      

      <section className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">All Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left font-medium text-gray-700">ID</th>
                <th className="py-2 px-4 text-left font-medium text-gray-700">Name</th>
                <th className="py-2 px-4 text-left font-medium text-gray-700">Email</th>
                 
                <th className="py-2 px-4 text-left font-medium text-gray-700">login Time</th>
                <th className="py-2 px-4 text-left font-medium text-gray-700">logout Time</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-4">{u.id}</td>
                  <td className="py-2 px-4">{u.firstName} {u.lastName}</td>
                  <td className="py-2 px-4 capitalize">{u.email}</td>
                  <td className="py-2 px-4">{u.loginTime}</td>
                  <td className="py-2 px-4">{u.logoutTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>



       

       
    </div>
  );
}