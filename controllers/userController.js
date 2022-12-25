const getUsers = async (req, res) => {
    res.status(200).json({
      message: 'get all users',
      requestedAt: req.requestTime,
    });
  };
  
  const getUserById = async (req, res) => {
    res.status(200).json({
      message: 'get user by id',
      params: req.params,
      requestedAt: req.requestTime,
    });
  };
  
  const updateUser = async (req, res) => {
    res.status(200).json({
      message: 'update user by id',
      params: req.params,
      requestedAt: req.requestTime,
    });
  };
  
  const deleteUser = async (req, res) => {
    res.status(200).json({
      message: 'delete user by id',
      params: req.params,
      requestedAt: req.requestTime,
    });
  };
  
  module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
  };
  