import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [applications, setApplications] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const fetchApplications = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/applications",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setApplications(res.data);
  };

  const addApplication = async () => {
    if (!company || !role) return;

    await axios.post(
      "http://localhost:5000/api/applications",
      { company, role, status: "Applied" },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setCompany("");
    setRole("");
    fetchApplications();
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-2xl mb-6">Job Dashboard</h1>

        {/* Add Form */}
        <div className="mb-6 border p-4">
          <input
            className="border p-2 mr-2"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <input
            className="border p-2 mr-2"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <button
            onClick={addApplication}
            className="bg-green-500 text-white px-4 py-2"
          >
            Add
          </button>
        </div>

        {/* Filter + Search */}
        <div className="mb-6 flex gap-4">
          <select
            className="border p-2"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Rejected</option>
            <option>Offer</option>
          </select>

          <input
            className="border p-2"
            placeholder="Search company..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Applications List */}
        {applications
          .filter(
            (app) =>
              (filter === "All" || app.status === filter) &&
              app.company.toLowerCase().includes(search.toLowerCase())
          )
          .map((app) => (
            <div
              key={app.id}
              className="border p-4 mb-3 flex justify-between items-center"
            >
              <div>
                <p className="font-bold">{app.company}</p>
                <p>{app.role}</p>

                <select
                  value={app.status}
                  onChange={async (e) => {
                    await axios.patch(
                      `http://localhost:5000/api/applications/${app.id}`,
                      { status: e.target.value },
                      { headers: { Authorization: `Bearer ${token}` } }
                    );
                    fetchApplications();
                  }}
                  className="border mt-2 p-1"
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Rejected</option>
                  <option>Offer</option>
                </select>
              </div>

              <button
                onClick={async () => {
                  await axios.delete(
                    `http://localhost:5000/api/applications/${app.id}`,
                    { headers: { Authorization: `Bearer ${token}` } }
                  );
                  fetchApplications();
                }}
                className="bg-red-500 text-white px-3 py-1"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default Dashboard;
