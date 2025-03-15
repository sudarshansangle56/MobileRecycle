import { useState } from "react";

export default function IMEIChecker() {
  const [imei, setImei] = useState("");
  const [mobileData, setMobileData] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = async () => {
    if (!imei) {
      setError("Please enter an IMEI number.");
      return;
    }
    setError("");
    
    try {
      const res = await fetch(`http://localhost:5000/api/checkMobile?imei=${imei}`);
      const data = await res.json();
      
      if (data.error) {
        setError(data.error);
        setMobileData(null);
      } else {
        setMobileData(data);
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter IMEI number"
        value={imei}
        onChange={(e) => setImei(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleCheck} className="bg-blue-500 text-white p-2 ml-2">Check Mobile</button>

      {error && <p className="text-red-500">{error}</p>}

      {mobileData && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <p><strong>Model:</strong> {mobileData.model || "N/A"}</p>
          <p><strong>Purchase Date:</strong> {mobileData.purchaseDate || "N/A"}</p>
          <p><strong>Activation Date:</strong> {mobileData.activationDate || "N/A"}</p>
        </div>
      )}
    </div>
  );
}
