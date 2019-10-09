const validateData = require('../validate/data');

/**
 * @route   POST api/validate
 * @desc    Tests data Object route
 * @access  Private
 */

const validate = (req, res) => {
  const { data, rules } = req.body;

  const output = validateData(data, rules);

  return res.status(200).send({ output });
};

module.exports = validate;
