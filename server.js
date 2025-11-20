const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Sunaina! Your CI/CD pipeline is working successfully 😊");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
