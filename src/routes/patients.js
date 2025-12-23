"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
// Temporary sample data
var patients = [
    { id: 1, name: "John Doe", age: 32 },
    { id: 2, name: "Mary Wanjiku", age: 45 }
];
router.get("/", function (req, res) {
    res.json(patients);
});
exports.default = router;
