import { useState } from 'react'
// import { ErrorBoundary } from 'react-error-boundary'
import Home from './Component/Home/Home'
import { Counter } from './Component/Counter'
import { ErrorBoundary } from './Component/errorBoundary'


function App() {

  return (
    <div className="App">
      <Home />

      {/* <ErrorBoundary>
        <Counter />
      </ErrorBoundary> */}
    </div>
    
  )
}

export default App
