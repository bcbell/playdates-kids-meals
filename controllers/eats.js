const Eat =require('../models/eat')

module.exports={
    index,
}

function index(req, res) {
    Eat.find({}).then((user) => {
      res.render("eats/meals", {
     title: "Kid-Friendly Dining & Meals", user});
    });
}
