import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem';
import Icons from '../Icons/Icons';
import styles from './Dropdown.css';

export const EMPTY_ITEM = { label: '', id: '' };

const Dropdown = ({ className, title, placeholder, items, onChange, value }) => {
  const [show, setshow] = useState(false);

  const handleItemClick = (item) => {
    setshow(false);
    onChange(item);
  };

  const handlePickerStatus = (event) => {
    event.stopPropagation();
    setshow((oldValue) => !oldValue);
  };

  useEffect(() => {
    if (show) {
      // Close Dropdown on click outside
      window.addEventListener('click', handlePickerStatus);
    }
    return () => {
      window.removeEventListener('click', handlePickerStatus);
    };
  }, [show]);

  return (
    <div className={`${styles.Dropdown} ${className || ''}`.trim()}>
      <div className={styles.Dropdown__Content}>
        <h2 className={styles.Dropdown__Content__Title} id="Dropdown__Content__Title">
          {title}
        </h2>
      </div>
      <div className={styles.Dropdown__Picker}>
        <div
          className={`${styles.Dropdown__Picker_Choices} ${
            !show ? styles['Dropdown__Picker_Choices--closed'] : ''
          }`.trim()}
          role="radiogroup"
          aria-labelledby={styles.Dropdown__Content__Title}
        >
          {items.map((item) => (
            <DropdownItem
              key={item.id}
              item={item}
              onSelect={handleItemClick}
              selected={item.id === value.id}
            />
          ))}
        </div>

        <button className={styles.Dropdown__Picker_Button} onClick={handlePickerStatus}>
          <div className={styles.Dropdown__Picker_Button_Label}>{value.label || placeholder}</div>
          <Icons.DownArrow className={styles.Dropdown__Picker_Button_Icon} />
        </button>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

Dropdown.defaultProps = {
  title: '',
  placeholder: '',
};

export default Dropdown;
