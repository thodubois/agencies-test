import React from 'react';
import { mount } from 'enzyme';
import Dropdown, { EMPTY_ITEM } from '../Dropdown';

const defaultProps = {
  className: '',
  title: 'title',
  placeholder: 'placeholder',
  items: [],
  onChange: () => {},
  value: EMPTY_ITEM,
};

const mockProps = ({ className, title, placeholder, items, onChange, value } = defaultProps) => ({
  className,
  title,
  placeholder,
  items,
  onChange,
  value,
});

const setup = (props = mockProps()) => {
  const wrapper = mount(<Dropdown {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('Component Dropdown', () => {
  test('render with no items in the list', () => {
    const { wrapper, props } = setup();
    // Dropdown contains prop title
    expect(wrapper.find('#Dropdown__Content__Title').text()).toEqual(props.title);

    // Close at start
    expect(wrapper.find('.Dropdown__Picker_Choices--closed').exists()).toEqual(true);

    // No value was given, the placeholder is used
    expect(wrapper.find('.Dropdown__Picker_Button_Label').text()).toEqual(props.placeholder);

    // No DropdownItem
    expect(wrapper.find('DropdownItem').length).toEqual(0);
  });

  test('render with some items in the list', () => {
    const onChange = jest.fn();
    const items = [
      { label: 'test', id: '1' },
      { label: 'test2', id: '2' },
    ];
    const { wrapper, props } = setup({
      ...mockProps(),
      className: 'classname',
      onChange,
      items,
    });
    // Classname is added to top component
    expect(wrapper.find('Dropdown').props().className).toContain(props.className);

    // As much dropdownItems as props items
    expect(wrapper.find('DropdownItem').length).toEqual(props.items.length);

    // Dropdown is closed
    expect(wrapper.find('.Dropdown__Picker_Choices--closed').exists()).toEqual(true);

    // On picker button click
    wrapper.find('.Dropdown__Picker_Button').simulate('click');

    // the dropdown opens
    expect(wrapper.find('.Dropdown__Picker_Choices--closed').exists()).toEqual(false);

    // On an dropdownItem click
    wrapper.find('DropdownItem').at(0).simulate('click');

    // The dropdown call onChange
    expect(props.onChange).toHaveBeenCalledWith({ id: '1', label: 'test' });
  });
});
