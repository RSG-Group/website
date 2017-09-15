// @flow
// Import React.
import React from 'react'

// Query our Apollo Server w/ React Apollo.
import { graphql, gql } from 'react-apollo'

// Get Material-UI.
import { Typography as Text, Grid, Card, CardContent, CardMedia, CardActions, Button } from 'material-ui'

// Import Link from Next.js.
import Link from 'next/link'

// Import our types.
import type { Props } from './types/projectDataRetriever.types'

// Create a React Component.
class Projects extends React.Component<Props, void> {
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
          style={{ height: 137 }}
        />
      </CardMedia>
    ) : ''
    // Setup CreateButton to create buttons.
    const CreateButton = button => (
      button.internalLink
        ? <Link href={button.link} prefetch><Button dense color='primary'>{button.title}</Button></Link>
        : (
          <Button
            dense
            color='primary'
            target='_blank'
            rel='noopener noreferrer'
            href={button.link}
            key={button.title}
          >{button.title}
          </Button>
        )
    )
    // Return a card.
    return (
      <Grid item xs>
        <Card raised style={{ height: 360 }}>
          {card.image ? <br /> : ''}
          {card.image ? <Image /> : ''}
          <CardContent>
            <br />
            <Text type='headline' component='h2'>{card.title}</Text>
            <Text component='p'>{card.description}</Text>
          </CardContent>
          <CardActions style={{ position: 'relative', top: card.buttonSpacing }}>
            {card.controls.map(button => CreateButton(button))}
          </CardActions>
        </Card>
      </Grid>
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
      buttonSpacing
      controls {
        title
        link
        internalLink
      }
    }
  }
`

// Make the query and tranform our component into a container.
export default graphql(CARDS_QUERY, { name: 'allCardsQuery' })(Projects)
