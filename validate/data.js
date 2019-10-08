/**
 * @data    Object: the request body
 * @rules   Array: an array of rules to check for.
 */

module.exports = function validateData(data, rules) {
  const errors = {};

  if (Object.keys(data).length < 1)
    return (errors.message = 'Object cannot be empty.');

  const missingItem = [];

  for (const rule of rules) {
    if (!data.hasOwnProperty(rule)) {
      missingItems.push(rule);
    }
  }
  return !missingItem.length
    ? 'valid'
    : (errors.missingItems = missingItem.join());
};
