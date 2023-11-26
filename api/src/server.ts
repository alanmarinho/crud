import express from "express";
import routers from "./infra/routers";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(routers);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
