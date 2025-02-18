import React, { useState, useEffect } from "react";

function AdminPage() {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage
    const data = JSON.parse(localStorage.getItem("submittedForms")) || [];
    setSubmittedData(data);
  }, []);

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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPage;
