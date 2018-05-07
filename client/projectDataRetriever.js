// @flow
// Import React.
import React from 'react'

// Query our Apollo Server w/ React Apollo.
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

// Get Material-UI.
import { Typography as Text, Grid, Card, CardContent, CardMedia, CardActions, Button } from 'material-ui'

// Import Link from Next.js.
import Link from 'next/link'

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
        internalLink
      }
    }
  }
`

// Create a React Component.
export default class Projects extends React.Component<{}> {
  render () {
    // The error.
    const Error = (props) =>
      <Text type='title'>Error while loading data ({props.error}). Try reloading the page.</Text>
    return (
      <Grid container>
        <Query query={CARDS_QUERY}>
          {({ loading, error, data }) => {
            // If the data is loading or there is an error.
            if (error) return <Error error={error} />
            if (loading || !data) return <Text type='title'>Loading.</Text>
            return data.allCards.map(card => (this.processCard(card)))
          }}
        </Query>
      </Grid>
    )
  }

  processCard (card: {
    image: Array<string>, title: string, description: string, controls: Array<{
      title: string, link: string
    }>
  }) {
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
        <Card raised style={{ height: 360, position: 'relative' }}>
          {card.image ? <br /> : ''}
          {card.image ? <Image /> : ''}
          <CardContent>
            <br />
            <Text type='headline' component='h2'>{card.title}</Text>
            <Text component='p'>{card.description}</Text>
          </CardContent>
          <CardActions style={{ position: 'absolute', left: 0, bottom: 0 }}>
            {card.controls.map(button => CreateButton(button))}
          </CardActions>
        </Card>
      </Grid>
    )
  }
}
