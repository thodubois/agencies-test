import React from 'react';
import PropTypes from 'prop-types';

const RadioButtonOn = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
    <path d="M12 7a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3z" />
  </svg>
);

const RadioButtonOff = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 22a10 10 0 1110-10 10 10 0 01-10 10zm0-18a8 8 0 108 8 8 8 0 00-8-8z" />
  </svg>
);

const DownArrow = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 16a1 1 0 01-.64-.23l-6-5a1 1 0 111.28-1.54L12 13.71l5.36-4.32a1 1 0 011.41.15 1 1 0 01-.14 1.46l-6 4.83A1 1 0 0112 16z" />
  </svg>
);

const IconPropTypes = {
  className: PropTypes.string,
};

RadioButtonOff.propTypes = IconPropTypes;
RadioButtonOn.propTypes = IconPropTypes;
DownArrow.propTypes = IconPropTypes;

export default { RadioButtonOff, RadioButtonOn, DownArrow };
