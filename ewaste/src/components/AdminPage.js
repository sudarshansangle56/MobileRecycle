import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [submittedData, setSubmittedData] = useState([]);
  const [accessDenied, setAccessDenied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAdmin = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setAccessDenied(true);
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/admin", {
          headers: { Authorization: token },
        });

        if (!response.ok) {
          throw new Error("Unauthorized");
        }

        // If admin is verified, fetch the submissions data
        const dataResponse = await fetch("http://localhost:5000/submissions", {
          headers: { Authorization: token },
        });

        const data = await dataResponse.json();
        setSubmittedData(data);
      } catch (error) {
        setAccessDenied(true);
      }
    };

    verifyAdmin();
  }, []);

  if (accessDenied) {
    return (
      <div className="container mt-4 text-center">
        <h2 className="text-danger">Access Denied</h2>
        <p className="text-muted">Admins only.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">Submitted E-Waste Forms</h2>
      {submittedData.length === 0 ? (
        <p className="text-center">No submissions yet.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Product Type</th>
              <th>Company</th>
              <th>Purchase Date</th>
              <th>Price (INR)</th>
              <th>IMEI</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.contact}</td>
                <td>{entry.productType}</td>
                <td>{entry.productCompany}</td>
                <td>{entry.purchaseDate}</td>
                <td>{entry.price}</td>
                <td>{entry.imei || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPage;
