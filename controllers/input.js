const validateInput = require('../validate/input');

/**
 * @route   Delete api/removeInput
 * @desc    removes an item from an Object route
 * @access  Private
 */

const removeInput = (req, res) => {
  const { item } = req.params;
  const { data } = req.body;

  const output = validateInput(data, item);

  return res.status(200).send({ output });
};

module.exports = removeInput;
