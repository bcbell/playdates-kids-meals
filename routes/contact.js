const router = require("express").Router();

router.get("/", function (req, res) {
  res.render("contact", { title: "Contact Us", user: req.user ? req.user : null });
});



module.exports = router;
