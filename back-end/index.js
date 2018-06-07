const app = require("express")();
const cors = require("cors");
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(cors());

app.post("/api/auth", function (req, res) {
  console.log(req.body);
  setTimeout(() => {
    res.json({});
  }, 5000);
});

app.listen(3001, () => console.log("server run"));