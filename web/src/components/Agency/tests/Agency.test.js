import React from 'react';
import { mount } from 'enzyme';
import Agency from '../Agency';

const defaultProps = {
  className: '',
  name: 'name',
  owner: 'owner',
  activity: 'activity',
  location: 'location',
};

const mockProps = ({ className, name, owner, activity, location } = defaultProps) => ({
  className,
  name,
  owner,
  activity,
  location,
});

const setup = (props = mockProps()) => {
  const wrapper = mount(<Agency {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('Component Agency', () => {
  test('render Agency without classname', () => {
    const { wrapper, props } = setup();

    // Agency contains all props in text
    expect(wrapper.find('Agency').text()).toContain(props.name);
    expect(wrapper.find('Agency').text()).toContain(props.location);
    expect(wrapper.find('Agency').text()).toContain(props.activity);
    expect(wrapper.find('Agency').text()).toContain(props.owner);
  });

  test('render without classname', () => {
    const className = 'classname';
    const { wrapper, props } = setup({ ...mockProps(), className });
    // Agency contains custom classname
    expect(wrapper.find('Agency').props().className).toContain(props.className);
  });
});
