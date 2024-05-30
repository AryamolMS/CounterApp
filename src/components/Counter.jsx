import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/CounterSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value)
  return (
<div className="fullscreen-center">
      <div className="card">
        <div className="center-content">
          <h1 className="text-center mb-5 text-info">Counter Application</h1>
          <h1 className='text mb-5'>{count}</h1>
          <div className="button-group">
            <button onClick={()=>dispatch(increment())} className="button increment">Increment</button>
            <button onClick={()=>dispatch(reset())} className="button reset">Reset</button>
            <button onClick={()=>dispatch(decrement())} className="button decrement">Decrement</button>
          </div>
        </div>
      </div>
    </div>
)
}

export default Counter