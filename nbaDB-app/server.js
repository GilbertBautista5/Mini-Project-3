const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");
let playerRoutes = require('./routes/playerRoutes');
let teamRoutes = require('./routes/teamRoutes');
let apiRoutes = require('./routes/apiRoutes');


app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my nbaDB application." });
});

app.use('/api/players', playerRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/api', apiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
