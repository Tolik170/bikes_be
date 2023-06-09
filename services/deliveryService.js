const { request } = require('gaxios')

const { NOVA_POSHTA_API_LINK, NOVA_POSHTA_API_KEY } = require('../configs/config')
const {
  deliveryServicesInitialValue: { ADDRESS, ADDRESS_GENERAL },
  deliveryServicesMethods: { GET_CITIES, GET_WAREHOUSES }
} = require('../consts/delivery')

const deliveryService = {
  getNovaPoshtaRequest: async (properties, model, method) => {
    return await request({
      method: 'post',
      url: NOVA_POSHTA_API_LINK,
      data: {
        modelName: model,
        calledMethod: method,
        methodProperties: properties,
        apiKey: NOVA_POSHTA_API_KEY
      }
    })
  },

  getNovaPoshtaCities: async (cityName) => {
    const res = await deliveryService.getNovaPoshtaRequest({ FindByString: cityName }, ADDRESS, GET_CITIES)

    return res.data.data.map((city) => ({
      description: city.Description,
      ref: city.Ref,
      cityID: city.CityID
    }))
  },

  getNovaPoshtaWarehouses: async (city) => {
    const res = await deliveryService.getNovaPoshtaRequest({ CityName: city }, ADDRESS_GENERAL, GET_WAREHOUSES)

    return res.data.data.map((warehouse) => ({
      description: warehouse.Description.replace(/\([^()]*\)|:/g, ''),
      number: warehouse.Number,
      placeMaxWeightAllowed: warehouse.PlaceMaxWeightAllowed,
      totalMaxWeightAllowed: warehouse.TotalMaxWeightAllowed
    }))
  }
}

module.exports = deliveryService
