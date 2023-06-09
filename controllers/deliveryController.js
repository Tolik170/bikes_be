const deliveryService = require('../services/deliveryService')

const getNovaPoshtaCities = async (req, res) => {
  const { city } = req.query

  const cities = await deliveryService.getNovaPoshtaCities(city)

  res.status(200).json(cities)
}

const getNovaPoshtaWarehouses = async (req, res) => {
  const { city } = req.query

  const warehouses = await deliveryService.getNovaPoshtaWarehouses(city)

  res.status(200).json(warehouses)
}

module.exports = {
  getNovaPoshtaCities,
  getNovaPoshtaWarehouses
}
