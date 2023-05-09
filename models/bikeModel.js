const { Schema, model } = require('mongoose')

const bikeSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Please, enter the bike name']
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'Please, enter the bike description']
    },
    category: {
      type: String,
      enum: ['Mountain', 'Road', 'Electric']
    },
    ratingsAverage: {
      type: Number,
      default: 0,
      min: [0, 'Rating must be above 0'],
      max: [5, 'Rating must be below 5.0'],
      set: (val) => Math.round(val * 10) / 10
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      min: [0, 'The price should be greater than 0'],
      required: [true, 'Please, enter the bike price']
    },
    purchasedCount: {
      type: Number,
      default: 0
    },
    sizes: {
      type: [Number],
      default: 49
    },
    colors: [
      {
        name: {
          type: String,
          required: [true, 'Please, enter color name']
        },
        colorHex: {
          type: String,
          required: [true, 'Please, enter color hex']
        }
      }
    ],
    images: {
      type: [String],
      required: [true, 'Please, enter the bike image']
    }
  },
  { timestamps: true }
)

module.exports = model('Bike', bikeSchema)
