// @flow
// Get React.
import React from 'react'

// Import our header.
import Header from '../client/ui/header'

// Import the Apollo container which retrieves our data.
import Projects from '../client/projectDataRetriever'

// Import Apollo.
import { ApolloClient, ApolloProvider } from 'react-apollo'

// Create an Apollo client.
const client = new ApolloClient()

// Export our final page.
export default () => (
  <ApolloProvider client={client}>
    <div>
      <Header title='RSG-Group' />
      <Projects />
    </div>
  </ApolloProvider>
)
