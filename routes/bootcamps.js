const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Hello Show all bootcamp" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Hello show a single bootcamp ${req.params.id}`,
  });
});

router.post("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Hello create new bootcamp ${req.params}` });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Hello update new bootcamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Hello delete new bootcamp ${req.params.id}` });
});

module.exports = router;
