import React from 'react';
import { mount } from 'enzyme';
import DropdownItem from '../DropdownItem';

const defaultProps = {
  selected: false,
  onSelect: () => {},
  item: { label: 'test', id: '1' },
};

const mockProps = ({ selected, onSelect, item } = defaultProps) => ({
  selected,
  onSelect,
  item,
});

const setup = (props = mockProps()) => {
  const wrapper = mount(<DropdownItem {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('Component DropdownItem', () => {
  test('render item not selected', () => {
    const onSelect = jest.fn();
    const { wrapper, props } = setup({ ...mockProps(), onSelect });

    // DropdownItem is not selected
    expect(wrapper.find('.DropdownItem--selected').exists()).toEqual(false);

    // DropdownItem label is the on from item props
    expect(wrapper.find('.DropdownItem').text()).toEqual(props.item.label);

    // Click on Item
    wrapper.simulate('click');

    // Call onSelect with item
    expect(props.onSelect).toHaveBeenCalledWith(props.item);
  });

  test('render item selected', () => {
    const { wrapper } = setup({ ...mockProps(), selected: true });
    // DropdownItem is not selected
    expect(wrapper.find('.DropdownItem--selected').exists()).toEqual(true);
  });
});
