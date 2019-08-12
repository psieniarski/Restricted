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

const Restricted = ({ show, children, fallback = null }) => {
  if (show) {
    return children;
  }
  return fallback;
};

Restricted.propTypes = {
  show: PropTypes.bool.isRequired,
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
