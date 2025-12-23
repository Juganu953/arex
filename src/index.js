"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var patients_1 = require("./routes/patients");
var app = (0, express_1.default)();
var port = process.env.PORT || 8080;
app.use(express_1.default.json());
// Register routes
app.use("/patients", patients_1.default);
app.get("/", function (req, res) {
    res.send("AREX Backend API is live");
});
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
