// Import React.
import React from 'react'

// Query our Apollo Server w/ React Apollo.
import { graphql, gql } from 'react-apollo'

// Create a React Component.
class Projects extends React.Component {
  render () {
    return (
      <div>Hullo.</div>
    )
  }
}

// Query for allCards without their IDs as they are unnecessary.
const CARDS_QUERY = gql`
  query AllCardsQuery {
    allCards {
      title
      description
      image
      controls {
        title
        link
      }
    }
  }
`

// Make the query and tranform our component into a container.
export default graphql(CARDS_QUERY, { name: '' })(Projects)
