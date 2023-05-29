const { Schema, model } = require('mongoose')
const { BIKE_CATEGORY } = require('../consts/validations');
const { FIELD_MUST_BE_ABOVE, FIELD_MUST_BE_BELOW, SPECIFY_FIELD } = require('../consts/errors');

const validateTechSpecification = {
  validator: (value) => value.trim().length > 0,
  message: 'Field cannot contain only whitespace'
};

const bikeSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, SPECIFY_FIELD('name')]
    },
    description: {
      type: String,
      trim: true,
      required: [true, SPECIFY_FIELD('description')]
    },
    category: {
      type: String,
      enum: {
        values: BIKE_CATEGORY,
        message: `Category can be either of these: ${BIKE_CATEGORY.toString()}`
      },
      required: [true, SPECIFY_FIELD('category')]
    },
    ratingsAverage: {
      type: Number,
      default: 0,
      min: [0, FIELD_MUST_BE_ABOVE('Rating', 0)],
      max: [5, FIELD_MUST_BE_BELOW('Rating', 5)],
      set: (val) => Math.round(val * 10) / 10
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      min: [0, FIELD_MUST_BE_ABOVE('Price', 0)],
      required: [true, SPECIFY_FIELD('price')]
    },
    purchasedCount: {
      type: Number,
      default: 0
    },
    sizes: {
      type: [Number],
      default: 49
    },
    techSpecification: {
      type: {
        frame: {
          type: String,
          required: [true, SPECIFY_FIELD('frame')],
          validate: validateTechSpecification
        },
        fork: {
          type: String,
          required: [true, SPECIFY_FIELD('fork')],
          validate: validateTechSpecification
        },
        brakes: {
          type: String,
          required: [true, SPECIFY_FIELD('brakes')],
          validate: validateTechSpecification
        },
        wheels: {
          type: String,
          required: [true, SPECIFY_FIELD('wheels')],
          validate: validateTechSpecification
        }
      }
    },
    previewImage: {
      type: String,
      required: [true, SPECIFY_FIELD('preview image')]
    },
    images: {
      type: [String],
    },
  },
  { timestamps: true }
)

module.exports = model('Bike', bikeSchema)
