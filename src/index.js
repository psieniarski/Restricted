import React from 'react';
import PropTypes from 'prop-types';

const Restricted = ({ type, allowed, children, fallback }) => {
  if (allowed.include(type)) {
    return children; 
  }
  return fallback ? fallback : null; 
}

Restricted.PropTypes = {
	type: PropTypes.string.isRequired,
	allowed: PropTypes.array.isRequired,
	children: PropTypes.oneOfType([
	    PropTypes.arrayOf(PropTypes.node),
	    PropTypes.node
	]).isRequired, 
	fallback: PropTypes.oneOfType([
	    PropTypes.arrayOf(PropTypes.node),
	    PropTypes.node
	])
}

export default Restricted;


