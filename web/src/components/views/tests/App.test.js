import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import { App } from '../App'
import agencyApi from '../../../api/agency'
import { EMPTY_ITEM } from '../../Dropdown/Dropdown'

jest.mock('../../../api/agency', () => ({
  useAgencies: jest.fn(() => ({ result: [], loading: false, error: null }))
}))

const setup = () => {
  const wrapper = mount(<App />)
  return {
    wrapper
  }
}

describe('Component App', () => {
  const realLocalStorage = window.localStorage
  beforeEach(() => {
    const localStorageStore = {}
    const getItem = jest.fn((key, value) => {
      localStorageStore[key] = value
    })
    const setItem = jest.fn((key) => localStorageStore[key])
    window.localStorage = { getItem, setItem }
  })
  afterEach(() => {
    window.localStorage = realLocalStorage
  })
  test('render with no agencies', () => {
    const { wrapper } = setup()

    expect(wrapper.text()).toEqual('Aucune agence trouvée')
  })

  test('render with loading', () => {
    agencyApi.useAgencies.mockImplementation(() => ({
      loading: true,
      error: null,
      result: []
    }))
    const { wrapper } = setup()
    expect(wrapper.find('Dropdown').props().className).not.toContain(
      'App__Animated_Block--loaded'
    )
  })

  test('render with error', () => {
    agencyApi.useAgencies.mockImplementation(() => ({
      loading: false,
      error: { code: 500 },
      result: []
    }))
    const { wrapper } = setup()
    expect(wrapper.text()).toEqual('Une erreure est survenue')
  })

  test('render with agencies', () => {
    const result = [
      {
        id: '0',
        name: 'Sekoya',
        owner: 'Mark Zuckerberg',
        location: 'Marseille',
        activity: 'Plomberie'
      },
      {
        id: '1',
        name: 'Oak',
        owner: 'Jeff Besos',
        location: 'Nantes',
        activity: 'Electrique'
      },
      {
        id: '2',
        name: 'Maple',
        owner: 'Bill Gates',
        location: 'Bordeaux',
        activity: 'Climatisation'
      }
    ]
    agencyApi.useAgencies.mockImplementation(() => ({
      loading: false,
      error: null,
      result
    }))
    const { wrapper } = setup()
    // Picker is displayed
    expect(wrapper.find('Dropdown').props().className).toContain(
      'App__Animated_Block--loaded'
    )

    // Dropdown get the right data
    expect(wrapper.find('Dropdown').props().items).toEqual([
      { id: '0', label: 'Sekoya' },
      { id: '1', label: 'Oak' },
      { id: '2', label: 'Maple' }
    ])

    // Current Dropdown value is empty
    expect(wrapper.find('Dropdown').props().value).toEqual(EMPTY_ITEM)

    // Agency info is not displayed as no agency is selected
    expect(wrapper.find('Agency').props().className).not.toContain(
      'App__Animated_Block--loaded'
    )

    // Selection du 1er item
    wrapper.find('DropdownItem').at(0).simulate('click')

    // Agency info is not displayed as no agency is selected
    expect(wrapper.find('Agency').props().className).toContain(
      'App__Animated_Block--loaded'
    )

    // Current Dropdown value is the selected
    expect(wrapper.find('Dropdown').props().value).toEqual({
      id: '0',
      label: 'Sekoya'
    })
  })
})
