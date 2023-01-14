const BikeService = require("../services/bikeService");

const createBike = async (req, res) => {
  const newBike = await BikeService.createBike(req.body);

  res.status(201).json(newBike);
}

const getBikes = async (req, res) => {
    const bikes = await BikeService.getBikes();

    res.status(200).json(bikes);
}

const getBikesByType = async (req, res) => {
  const { type } = req.params

  const bikes = await BikeService.getBikesByType(type)

  res.status(200).json(bikes);
}

const getBikeById = async (req, res) => {
  const { id } = req.params

  const bike = await BikeService.getBikeById(id)

  res.status(200).json(bike);
}

const updateBike = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const updatedBike = await BikeService.updateBike(id, updateData);

  res.status(200).json(updatedBike);
}

const deleteBike = async (req, res) => {
  const { id } = req.params;

  await BikeService.deleteBike(id);

  res.status(204).end();
}

module.exports = {
  createBike,
  getBikes,
  getBikesByType,
  getBikeById,
  updateBike,
  deleteBike
}
