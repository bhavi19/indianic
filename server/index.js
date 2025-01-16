const express = require('express');
const app = express();
const userRouter = require("./routes/users")
const cors = require('cors');

const corsOptions = {
    credentials: true,
    origin: ['http://localhost:4000'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions));
app.set("trust proxy", 1)

app.use(express.json());
app.use("/users", userRouter)

app.listen(4000, () => {
    console.log("Server running on port 4000");
});

const dbConnect = require("./db/dbConnect");
dbConnect();
