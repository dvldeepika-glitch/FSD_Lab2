const express = require("express");

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// --------------------
// Part (a) - Users Page
// --------------------
app.get("/users", (req, res) => {
    const users = [
        {
            name: "John Doe",
            email: "john@example.com",
            age: 25
        },
        {
            name: "Jane Smith",
            email: "jane@example.com",
            age: 30
        }
    ];

    res.render("users", {
        users: users,
        title: "User List"
    });
});

// --------------------
// Part (b) - Register Page
// --------------------
app.get("/register", (req, res) => {
    res.render("register", {
        error: null
    });
});

// Handle registration form
app.post("/register", (req, res) => {
    const { name, email, age } = req.body;

    // Basic validation
    if (!name || !email || !age) {
        return res.render("register", {
            error: "All fields are required."
        });
    }

    // Display submitted data
    res.render("success", {
        name: name,
        email: email,
        age: age
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});