import { renderHook } from '@testing-library/react-hooks'

import { formatAgency, useAgencies } from '../agency'

describe('api agency', () => {
  describe('formatAgency', () => {
    test('format empty entry', () => {
      expect(formatAgency()).toEqual({
        activity: '',
        id: '',
        location: '',
        name: '',
        owner: ''
      })
    })

    test('format actual response', () => {
      expect(
        formatAgency({
          activity: 'activity',
          id: 'id',
          location: 'location',
          name: 'name',
          owner: 'owner'
        })
      ).toEqual({
        activity: 'activity',
        id: 'id',
        location: 'location',
        name: 'name',
        owner: 'owner'
      })
    })
  })

  describe('useAgencies', () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([])
      })
    )

    beforeEach(() => {
      fetch.mockClear()
    })

    test('useAgencies with empty result', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useAgencies())
      expect(result.current).toEqual({
        result: [],
        loading: true,
        error: null
      })

      await waitForNextUpdate()

      expect(result.current).toEqual({
        result: [],
        loading: false,
        error: null
      })
    })

    test('useAgencies with error', async () => {
      global.fetch.mockImplementation(() =>
        Promise.reject({
          code: '503'
        })
      )
      const { result, waitForNextUpdate } = renderHook(() => useAgencies())
      expect(result.current).toEqual({
        result: [],
        loading: true,
        error: null
      })

      await waitForNextUpdate()

      expect(result.current).toEqual({
        result: [],
        loading: false,
        error: { code: '503' }
      })
    })
  })
})
