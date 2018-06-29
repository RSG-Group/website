// Get React.
import React from 'react'

// Import our header and the container which renders our data.
import Header from '../client/ui/header'
import Projects from '../client/projectDataRetriever'

// Export our final page.
export const Index = () => (
  <div>
    <Header title='RSG' />
    <Projects />
  </div>
)

export default Index
