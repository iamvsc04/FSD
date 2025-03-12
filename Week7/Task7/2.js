const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
const users = [
  { id: 1, name: "sri", email: "1@email.com" },
  { id: 2, name: "padha", email: "1@email.com" },
  { id: 3, name: "sri paada", email: "1@email.com" },
];
app.get("/", async (req, res) => {
  try {
    res.render("index", { users });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).send("Error fetching data: " + error.message);
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
