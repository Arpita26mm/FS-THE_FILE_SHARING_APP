import express from "express";
const app = express();
import DBConnection from "./database/db.js";
import fileRouter from "./routes/fileRoutes.js";
import cors from "cors";

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

DBConnection();

app.get("/", (req, res) => {
  //bs '/' hota to ye chlta
  res.send("Hello Everyone!");
});

app.use("/", fileRouter); //agr '/' ke bd kch hoga to vo ab fileRouter m jyga

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
