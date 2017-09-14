// @flow
// Get React.
import React from 'react'
// Get Material UI.
import {Card, CardContent, CardMedia, Button, CardActions, Typography as Text} from 'material-ui'

export default () => (
  <Card raised>
    <br />
    <CardMedia style={{textAlign: 'center'}}>
      <img
        src='/static/line-intersection.png'
        alt='Rays bro. Rays.'
        height='80pt'
      />
    </CardMedia>
    <CardContent>
      <Text type='headline' component='h2'>line-intersection</Text>
      <Text component='p'>Simple mini library for finding the intersection of a line or line segment.</Text>
    </CardContent>
    <CardActions>
      <Button
        dense
        color='primary'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RSG-Group/rsg-group.github.io/tree/master/intersection#line-intersection'
      >Readme
      </Button>
      <Button
        dense
        color='primary'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RSG-Group/rsg-group.github.io/tree/master/intersection'
      >Repository
      </Button>
    </CardActions>
  </Card>
)
