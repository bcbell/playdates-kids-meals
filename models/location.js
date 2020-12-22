const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema= new Schema({
  reviewer: String,
  reviewerPhoto: String,
  rating: {type: String, enum: ['Would recommend', 'May visit again', 'Would not recommend']},
  content: String,
},{
  timestamps: true
})

const locationSchema = new Schema(
    {
        placename: String,
        placeurl:  String,
        placeaddress: String,
        placelocality: String,
        placecity: String,
        state: {type: String, enum:['al','ak','az','ar','ca','co','ct','de','dc','fl','ga', 'hi','id','il','in','ia','ks','ky','la','me', 'md','ma','mi','mn','ms','mo','mt','ne', 'nv','nh','nj','nm','ny','nc','oh','ok','or','pa','ri','sc','sd','tn','tx','ut','vt','va','wa', 'wi','wy','as','gu','pr','vi']},
        placezipcode: Number,
        locationType: {
          type: 'object',
          properties: {
            param: {
              oneOf:[
                {
                enum:['National Park','Beaches', 'Caves', 'Mountains', 'Hills', 'Waterfalls', 'Islands', 'Forest','Entertainment Park', 'Wildlife', 'Aquarium','Botanical Garden', 'Museum', 'Art Gallery', 'Historical or Heritage','Spectating Sports Atrraction', 'Participating Sports Attraction', 'Stadium Tour', 'Market', 'Festivals', 'Parade', 'Exhibitions', 'Entertainment Venue']
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
        age : {
          type: 'object',
          properties: {
            param: {
              oneOf:[
                {
                enum:['expecting parents','newborns', 'infant','toddlers', 'preschoolers', 'schoolage', 'preteen', 'teenagers', 'college']
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
        highlights: String,
        reviews: [reviewSchema],
        user: [{type: Schema.Types.ObjectId, ref:'User'}],
       
      },
      {
        timestamps: true,
      }
    );



module.exports = mongoose.model("Location", locationSchema);