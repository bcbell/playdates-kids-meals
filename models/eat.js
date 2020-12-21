const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eatSchema =new Schema({
    title:String,
    meal: {type:String, enum:['breakfast', 'lunch', 'dinner', 'snack', 'dessert']},
    diet: {type: String, enum:["balanaced", "highProtein","lowCarb", "lowFat","lowSodium", "highFiber", 'vegan', 'vegetarian','halal','kosher', 'paleo', 'gluten', 'sugar', 'none']},
    cuisineType: {type: String, enum:['american', 'southern', 'soul-food', 'americanChinese', 'indian', 'mexican','spanish','cajun', 'african', 'french', 'german', 'thai', 'japanese', 'caribbean', 'vietnamese', 'moroccan', 'korean', 'greek', 'italian','brazilian', 'cuban', 'mediterranean','indigenous','vegetarian']},
    health: {type: String, enum:["peanutfree", "treenut","seafoodfree", "shellfishFree", 'dairyFree', 'eggFree',  'glutenfree', 'soy', 'none']},
    dish: {type: String, enum:['soup', 'salad',  'side', 'main', 'appetizer','dessert' ]} ,
    recipe: String, 
    url: String,
    ingredients: {
        type: 'object',
        properties: {
          param: {
            oneOf:[
              {
              type:'array',
              items: {type : 'integer'}
            }              
          ]
          }
        },
        additionalProperties : false,
        required: ['param'],
      },
    prep: String,
    cookTime: String,
    serves: Number,
    descripton: String,
    postedBy: String,
    user: [{type: Schema.Types.ObjectID, ref:'User'}],
},{
    timestamps: true,
}
)

module.exports=mongoose.model("Eat", eatSchema)