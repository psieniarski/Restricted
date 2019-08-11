import React from 'react';
import PropTypes from 'prop-types';

const isBoolean = value => {
  return typeof value === 'boolean';
};

export const everyValidator = validators => {
  return validators.every(validator => {
    if (isBoolean(validator)) {
      return validator;
    }
    return validator();
  });
};

const Restricted = ({ validators, children, fallback }) => {
  const allowed = everyValidator(validators);

  if (allowed) {
    return children;
  }

  return fallback ? fallback : null;
};

Restricted.PropTypes = {
  validators: PropTypes.arrayOf(PropTypes.func, PropTypes.bool).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  fallback: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Restricted;
