import express from "express";
import Translate from "translate";
import cors from "cors";
const app = express();
app.use(express.json());
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.get("/", (req, res) => {
  res.send("heelppp");
});

app.post("/translate", async (req, res) => {
  const { text } = req.body;
  try {
    const result = await Translate(text, { to: "fr" });
    res.status(200).send({ translation: result });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen("3000", () => {
  console.log("Server is running on port 3000");
});
