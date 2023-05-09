const getRegex = require('../getRegex')

const bikeAggregateOptions = (query) => {
  const { price, category, rating, name, sort, skip = 0, limit = 5 } = query

  const match = {}

  if (name) {
    match.name = getRegex(name)
  }

  if (category) {
    match.category = { $in: category }
  }

  if (price) {
    const [minPrice, maxPrice] = price
    match.price = { $gte: minPrice, $lte: maxPrice }
  }

  if (rating) {
    match.ratingsAverage = { $gte: parseInt(rating) }
  }

  const sortOption = {}

  if (sort) {
    if (sort === 'priceAsc') {
      sortOption['price'] = 1
    } else if (sort === 'priceDesc') {
      sortOption['price'] = -1
    } else {
      sortOption[sort] = 1
    }
  }

  return { match, sort: sortOption, skip, limit }
}

module.exports = bikeAggregateOptions
