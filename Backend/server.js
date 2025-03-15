const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = "ss_test_123456789"; // Secret Key for JWT

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ewaste_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Admin Login (Direct, No Database)
app.post("/login", (req, res) => {
  const { email, password } = req.body; // Make sure frontend sends "email" instead of "id"

  console.log("Received Login Request:", req.body); // Debugging Line

  if (email === "Sudarshan" && password === "Sudarshan5656") {
    const token = jwt.sign({ role: "admin" }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token, message: "Admin login successful" });
  }

  return res.status(401).json({ message: "Invalid admin credentials" });
});



// Middleware to Verify JWT Token
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    req.user = decoded;
    next();
  });
};

// Admin Route Protection
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only" });
  }
  next();
};

// Protected Admin Route
app.get("/admin", verifyToken, isAdmin, (req, res) => {
  res.json({ message: "Welcome, Admin!" });
});

// Submit Form Data (Handle User Submissions)
app.post("/submit", (req, res) => {
  const { name, email, contact, productType, productCompany, purchaseDate, price, imei } = req.body;

  const query =
    "INSERT INTO submissions (name, email, contact, productType, productCompany, purchaseDate, price, imei) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [name, email, contact, productType, productCompany, purchaseDate, price, imei || null],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.status(200).json({ message: "Form submitted successfully!" });
    }
  );
});

// Fetch Submitted Data (Admin Only)
app.get("/submissions", verifyToken, isAdmin, (req, res) => {
  db.query("SELECT * FROM submissions", (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
