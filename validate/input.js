/**
 * @data    Object: the object to be removed from
 * @item   String: the name of the attribute to be removed from the object
 */

module.exports = function validateInput(data, item) {
  const outputs = {};

  if (Object.keys(data).length < 1)
    return (outputs.message = 'Object cannot be empty.');

  if (!data.hasOwnProperty(item)) {
    return (outputs.notFound = 'attribute not found');
  }
  delete data[item];
  return outputs.removed = data;
};
