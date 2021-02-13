import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../Icons/Icons';

import styles from './DropdownItem.css';

function DropdownItem({ item, onSelect, selected }) {
  const { label } = item;
  const handleSelect = (event) => {
    event.stopPropagation();
    onSelect(item);
  };
  const RadioButton = selected ? Icons.RadioButtonOn : Icons.RadioButtonOff;
  return (
    <button
      className={`${styles.DropdownItem} ${
        selected ? styles['DropdownItem--selected'] : ''
      }`.trim()}
      onClick={handleSelect}
      role="radio"
      aria-checked={selected}
    >
      {label}
      <RadioButton className={styles.DropdownItem__Icon} />
    </button>
  );
}

DropdownItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

export default DropdownItem;
