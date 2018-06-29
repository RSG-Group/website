// Import React.
import React from 'react'

// Get Material-UI, Link from Next.js and our project cards..
import {
  Typography as Text, Grid, Card, CardContent, CardMedia, CardActions, Button
} from '@material-ui/core'
import Link from 'next/link'
import data from './projects'

// Create a React Component.
export default class Projects extends React.Component {
  render () { return <Grid container>{data.map(card => (this.processCard(card)))}</Grid> }

  processCard (card) {
    // If Image is there..
    const Image = () => card.image ? (
      <CardMedia style={{ textAlign: 'center' }}>
        <img src={card.image[0]} alt={card.image[1]} style={{ height: 137 }} />
      </CardMedia>
    ) : ''
    // Setup CreateButton to create buttons.
    const CreateButton = button => (
      button.internalLink
        ? <Link href={button.link} prefetch><Button dense color='primary'>{button.title}</Button></Link>
        : (
          <Button
            dense color='primary' target='_blank'
            rel='noopener noreferrer' href={button.link} key={button.title}
          >{button.title}</Button>
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
