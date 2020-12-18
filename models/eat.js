const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema= new Schema({
    foodId: String,
    quantity: Number,
    Measure: Number,
    foodCategory: String,
    ingredients: Boolean

})
const eatSchema =new Schema({
    title:String,
    meal: {type:String, enum:['breakfast', 'lunch', 'dinner', 'snack', 'dessert']},
    diet: {type: String, enum:["balanaced", "high-protein","low-carb", "low-fat","low-sodium", "high-fiber", '']},
    cuisineType: {type: String, enum:['american', 'southern', 'soul-food', 'chinese', 'indian', '']},
    health: {type: String, enum:["peanut-free", "tree-nut free","seafood-free", "shell-fish free", 'dairy-free', 'milk-free', 'vegetarian', 'vegan', 'palo', 'gluten free', '']},
    dish: {type: String, enum:['soup', 'salad', 'sandwich', 'side', 'main', 'pasta', 'chicken']} ,
    steps: String, 
    url: String,
    ingredients: [ingredientSchema],
    user: [{type: Schema.Types.ObjectID, ref:'User'}],
    restaurants:  [{type: Schema.Types.ObjectId, ref: 'Rest'}],

},{
    timestamps: true,
}
)

module.exports=mongoose.model("Eat", eatSchema)