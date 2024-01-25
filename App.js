import React from 'react'
import { createRoot } from 'react-dom/client'

const heading = React.createElement('h1', { id: 'heading' }, 'Namaste JS')

//React Functional Component

const Title = () => {
  return <h1 className='title'>Namaste React Title</h1>
}

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1 id='heading'>Namaste react Functional Component</h1>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))

root.render(<HeadingComponent />)
