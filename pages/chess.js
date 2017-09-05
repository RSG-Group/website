// @flow
// Import React.
import React from 'react'

// Import Header.
import Header from '../client/header'

// Beware the ugly and unmaintainable code that the following code shall link to. BEWARE.
export default () => (
  <div>
    <Header title='Chess - RSG-Group' />
    {/* Unmaintable code linked here. */}
    <iframe src='/static/chess/index.html' height='580px' width='100%' frameBorder='0' title='Chess Game' />
  </div>
)
