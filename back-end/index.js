const app = require("express")();
const cors = require("cors");
const bodyParser = require('body-parser');
const firebase = require("firebase");
const cf = require("./config.json");

const appFB = firebase.initializeApp({ ...cf });
const _DB = appFB.database();

app.use(bodyParser.json());
app.use(cors());

app.post("/api/auth", function (req, res) {
	const { login, pass } = req.body;
	if (login && pass) {
		appFB.auth()
			.signInWithEmailAndPassword(login, pass)
			.then((data) => {
				res.json({ token: login + Math.random() });
			})
			.catch(function (error) {
				if (error) {
					appFB.auth()
						.createUserWithEmailAndPassword(login, pass)
						.then(() => res.json({ token: login + Math.random() }))
						.catch(function (error) {
							if (error) {
								res.json({ token: "", message: error.message });
							}
						});
				} else {
				}
			});
	} else {
		res.json({ token: "", message: "not email or password" });
	}
	// res.json({ token: "" });
});

app.listen(3001, () => console.log("server run"));
