const router = require("express").Router();

router.get("/", function (req, res) {
  res.render("about", { title: "Our Story", user: req.user ? req.user : null });
});


module.exports = router;
