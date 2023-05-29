const errors = {
    BIKE_NOT_FOUND: {
      code: 'BIKE_NOT_FOUND',
      message: 'Bike with the specified id or name was not found.',
    },
    NOT_FOUND: {
      code: 'NOT_FOUND',
      message: 'The requested URL was not found.',
    },
    ALREADY_EXIST: {
      code: 'ALREADY_EXIST',
      message: 'The bike with this name already exist.',
    },
    FIELD_MUST_BE_ABOVE: (field, quantity) =>
    `${field[0].toUpperCase() + field.slice(1)} must be above ${quantity}.`,
  FIELD_MUST_BE_BELOW: (field, quantity) =>
    `${field[0].toUpperCase() + field.slice(1)} must be below ${quantity}.`,
  SPECIFY_FIELD: (field) => 
  `Please, specify the ${field}.`
  };
  
  module.exports = errors;
  