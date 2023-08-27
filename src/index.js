require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const usersRotes = require("./routes/users");
const middlewareLogRequest = require("./middleware/log");
const upload = require("./middleware/multer");
const cors = require('cors')
const http = require('http')
const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use(cors())
app.use("/image", express.static("public/img"));

// app.method(path, handler);
app.use("/users", usersRotes);
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload berhasil",
  });
})

app.use((err, req, res, next ) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`);
});
