const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

// Use JSON body parser middleware
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Store events in memory (replace with a database in a real application)
const events = [];

// Create new event
app.post("/api/events", (req, res) => {
    const newEvent = req.body;
    events.push(newEvent);
    res.status(201).json({ message: "Event created successfully." });
});

// Get all events
app.get("/api/events", (req, res) => {
    res.json(events);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
