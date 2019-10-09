/**
 * @data    Object: the request body
 * @rules   Array: an array of rules to check for.
 */

module.exports = function validateData(data, rules) {
  const outputs = {};
  const missingItems = [];

  if (!Array.isArray(rules) || !rules.length) {
    return (outputs.isEmpty = 'Rules cannot be empty');
  }

  if (Object.keys(data).length < 1)
    return (outputs.message = 'Object cannot be empty.');

  for (const rule of rules) {
    if (!data.hasOwnProperty(rule)) {
      missingItems.push(rule);
    }
  }
  return !missingItems.length
    ? 'valid'
    : (outputs.missingItems = missingItems.join());
};
