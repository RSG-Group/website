// @flow
// Import React.
import React from 'react'

// Import Header.
import Header from '../imports/header'

// Beware the ugly and unmaintainable code that the following code shall link to. BEWARE.
export default () => (
  <div>
    <Header title='Chess - RSG-Group' />
    {/* Unmaintable code linked here. */}
    <iframe src='http://rsg-group.github.io/Chess/index.html' height='500em' width='100%' frameBorder='0' />
  </div>
)
