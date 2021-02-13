import { renderHook, act } from '@testing-library/react-hooks'
import { useLocalStorage } from '../localstorage'

describe('helpers localstorage', () => {
  test('useLocalStorage', () => {
    const initialValue = 'test'
    const key = 'key'
    const { result } = renderHook(() => useLocalStorage(key, initialValue))
    expect(result.current[0]).toEqual(initialValue)

    act(() => {
      result.current[1]('newValue')
    })

    expect(result.current[0]).toEqual('newValue')
  })

  test('useLocalStorage with error', () => {
    Object.defineProperty(window, 'localStorage', {})
    const initialValue = 'test'
    const key = 'key'
    const { result } = renderHook(() => useLocalStorage(key, initialValue))
    expect(result.current[0]).toEqual(initialValue)

    act(() => {
      result.current[1]('newValue')
    })

    expect(result.current[0]).toEqual(initialValue)
  })
})
