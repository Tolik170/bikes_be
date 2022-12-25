const errors = {
    TOUR_NOT_FOUND: {
      code: 'TOUR_NOT_FOUND',
      message: 'Tour with the specified id was not found.',
    },
    NOT_FOUND: {
      code: 'NOT_FOUND',
      message: 'The requested URL was not found.',
    },
    ALREADY_EXIST: {
      code: 'ALREADY_EXIST',
      message: 'The tour with this name already exist.',
    },
  };
  
  module.exports = errors;
  