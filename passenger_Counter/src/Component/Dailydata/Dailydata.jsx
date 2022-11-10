import * as React from 'react'
import ReactDOM from 'react-dom'
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
}

function Greeting({subject}) {
  return <div>Hello {subject.toUpperCase()}</div>
}

function Farewell({subject}) {
  return <div>Goodbye {subject.toUpperCase()}</div>
}

function Dailydata() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Greeting />
        <Farewell />
      </ErrorBoundary>
    </div>
  )
}



export default Dailydata