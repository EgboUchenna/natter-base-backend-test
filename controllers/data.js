import validateData from '../validate/data';
import express from 'express';
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

export default validate;
