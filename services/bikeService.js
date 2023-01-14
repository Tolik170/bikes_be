const { createError } = require('../utils/errorHellpers')
const Bike = require('../models/bikeModel')
const { ALREADY_EXIST, BIKE_NOT_FOUND } = require('../consts/errors')

const bikeService = {
  createBike: async (body) => {
    const duplicatedBike = await Bike.findOne({ name: body.name }).exec()

    if (duplicatedBike) {
      throw createError(409, ALREADY_EXIST)
    }

    const newBike = await Bike.create(body)

    return newBike
  },

  getBikes: async () => {
    const bikes = await Bike.find().lean().exec()

    return bikes
  },

  getBikesByType: async (type) => {
    const bikes = await Bike.find({ type }).exec()

    if (!bikes) {
      return null
    }

    return bikes
  },

  getBikeById: async (id) => {
    const bike = await Bike.findById(id).exec()

    if (!bike) {
      throw createError(404, BIKE_NOT_FOUND)
    }

    return bike
  },

  updateBike: async (id, updateData) => {
    const bike = await Bike.findByIdAndUpdate(id, updateData, { new: true }).lean().exec()

    if (!bike) {
      throw createError(404, BIKE_NOT_FOUND)
    }
  },

  deleteBike: async (id) => {
    const bike = await Bike.findByIdAndRemove(id).exec()

    if (!bike) {
      throw createError(404, BIKE_NOT_FOUND)
    }
  }
}

module.exports = bikeService
