import express from "express";
import bodyParser from "body-parser";

import medicinesRoutes from "./routes/medicine.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/medicines", medicinesRoutes);

app.get("/", (req, res) => {
  res.send("Hello from homepage");
});

app.listen(PORT, () => {
  console.log(`Server Running on port : http://localhost:${PORT}`);
});
