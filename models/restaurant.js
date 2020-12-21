const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const restSchema = new Schema(
    {
        name: String,
        url: String,
        address: String,
        addressTwo: String,
        locality: String,
        city: String,
        state: {type: String, enum:['al','ak','az','ar','ca',]},
        zipcode: Number,
        speciality: String,
        features: {
          type: 'object',
          properties: {
            param: {
              oneOf:[
                {
                enum:['Delivery', 'Reservations', 'Waitlist', 'Accepts Credit Cards', 'Outdoor Seating', 'Good for Families','Dogs Allowed', 'Wheelchair Accessible','Gender Neutral Restrooms','Family Restroom', 'Changing Table', 'Kids Menu','Food for Large Groups', 'Offers Alcohol','Free Wifi', 'Free Parking', 'No Smoking']
              },{
                type:'array',
                items: {type : 'integer'}
              }              
            ]
            }
          },
          additionalProperties : false,
          required: ['param'],
        },
        service:{
          type: 'object',
          properties: {
            param: {
              oneOf:[
                {
                enum:['breakfast', 'brunch', 'lunch', 'dessert', 'late night']
              },{
                type:'array',
                items: {type : 'integer'}
              }              
            ]
            }
          },
          additionalProperties : false,
          required: ['param'],
        },
        user: [{type: Schema.Types.ObjectId, ref:'User'}],
        location:  [{type: Schema.Types.ObjectId, ref: 'Location'}], 
        reviews: [{type:Schema.Types.ObjectId, ref: "Review"}],

      },
      {
        timestamps: true,
      }
    );



module.exports = mongoose.model("Rest", restSchema);