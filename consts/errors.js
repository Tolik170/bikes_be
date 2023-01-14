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
  };
  
  module.exports = errors;
  