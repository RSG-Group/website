// @flow
// Import React.
import React from 'react'

// Query our Apollo Server w/ React Apollo.
import { graphql, gql } from 'react-apollo'

// Get Material-UI.
import { Typography as Text, Grid, Card, CardContent, CardMedia, CardActions } from 'material-ui'

// Import our types.
import type { allCardsQuery } from './projectDataRetriever.types'

// Define prop types.
type Props = {
  allCardsQuery: allCardsQuery
}

// Create a React Component.
class Projects extends React.Component<void, Props, void> {
  render () {
    // If we are loading data or experienced an error.
    if (this.props.allCardsQuery && this.props.allCardsQuery.loading) {
      return <Text type='title'>Loading.</Text>
    } else if (this.props.allCardsQuery && this.props.allCardsQuery.error) {
      const error = this.props.allCardsQuery.error
      return <Text type='title'>Error while loading data ({error}). Try reloading the page.</Text>
    }
    // If we've finished loading without errors, here we go.
    const allCards = this.props.allCardsQuery.allCards
    return (
      <Grid container>
        {allCards.map(card => (
          this.processCard(card)
        ))}
      </Grid>
    )
  }

  processCard (card) {
    // If Image is there..
    const Image = () => card.image ? (
      <CardMedia style={{ textAlign: 'center' }}>
        <img
          src={card.image[0]}
          alt={card.image[1]}
          style={{ height: card.image[2] ? card.image[2] : undefined }}
        />
      </CardMedia>
    ) : ''
    // Return a card.
    return (
      <Card raised>
        {card.image ? <br /> : ''}
        {card.image ? <Image /> : ''}
        <CardContent>
          {card.divSpacing ? <div style={{ height: card.divSpacing }} /> : ''}
          <Text type='headline' component='h2'>{card.title}</Text>
          <Text component='p'>{card.description}</Text>
        </CardContent>
        <CardActions />
      </Card>
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
export default graphql(CARDS_QUERY, { name: 'allCardsQuery' })(Projects)
