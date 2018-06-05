const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");

app.set("port", process.env.PORT || 3001);

app.use(cors());
app.use(bodyParser.json());
// routes
app.post("/api/auth-user", (req, res) => {
	const email = "1@2.3";
	console.log(req.body);
	
  res.json({
    authToken: generateToket() + email
  });
});

function generateToket() {
  let token = "";
  for (let i = 0; i < 10; i++) {
    token += (Math.random() * 100000000).toString(36);
  }
  return token;
}

app.listen(app.get("port"), function() {
  console.log("port" + app.get("port"));
});
