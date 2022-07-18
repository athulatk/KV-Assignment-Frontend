import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from '../counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment by 5"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
        <button
          aria-label="Decrement by 5"
          onClick={() => dispatch(decrementByAmount(5))}
        >
          Decrement by 5
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}