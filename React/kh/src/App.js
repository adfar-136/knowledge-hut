import React from 'react'
import Counter from './Counter'
import ErrorBoundary from './ErrorBoundary'
export default function App() {
  return (
    <div>
      <ErrorBoundary>
      <Counter/>
      <Counter/>

      </ErrorBoundary>
      <ErrorBoundary>
      <Counter/>
      
      
      </ErrorBoundary>
      <h1>ADfar</h1>
      
      
    </div>
  )
}
