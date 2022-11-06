import React, {useState, useReducer} from 'react'
import './Home.css'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset'
}

function reducer(state, action){
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return { count : state.count + 1}
    case ACTIONS.DECREMENT:
      return { count: state.count - 1}
    case ACTIONS.RESET:
      return { count: 0}
    default:
      return state
  }
}
const Home = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  // const [num, setNum] = useState('')

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT})
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT})
  }

  function reset(){
    dispatch({ type: ACTIONS.RESET})
  }

  return (
    <div className='home'>
      <div className='home__app'>
        <h1>Passenger Counter</h1>
        <span>{state.count}</span>
        <div className='buttons'>
          <button classname='sub' onClick={decrement}>-</button>
          
          <button classname='add' onClick={increment}>+</button>
          <button classname='res' onClick={reset}>Reset</button>
          <form>
            <input type='text' placeholder='Input Manually' 
              // value={state.count} 
              onChange={e => setNum(e.target.value)}
             />
             
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home