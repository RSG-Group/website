// @flow
// Get React.
import React from 'react'

// Import our header.
import Header from '../client/ui/header'

// Import the Apollo container which retrieves our data.
import Projects from '../client/projectDataRetriever'

// Import Apollo.
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

// Create an Apollo client.
const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
})

// Export our final page.
export default () => (
  <ApolloProvider client={client}>
    <div>
      <Header title='RSG-Group' />
      <Projects />
    </div>
  </ApolloProvider>
)
