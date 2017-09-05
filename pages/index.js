// @flow
// Get React.
import React from 'react'

// Import our header.
import Header from '../client/header'

// Import our JSX object of projects.
import Projects from '../client/ui/cards'

// Export our final page.
export default () => (
  <div>
    <Header title='RSG-Group' />
    <Projects />
  </div>
)
