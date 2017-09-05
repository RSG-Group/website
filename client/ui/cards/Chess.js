// @flow
// Get React.
import React from 'react'
// Get Material UI.
import {Card, CardContent, CardMedia, Button, CardActions, Typography as Text} from 'material-ui'
// Get Link to route to the demo.
import Link from 'next/link'

export default () => (
  <Card raised>
    <br />
    <CardMedia style={{textAlign: 'center'}}>
      <img
        src='/static/chess.png'
        alt='Chess demo.'
        height='105pt'
      />
    </CardMedia>
    <CardContent>
      <Text type='headline' component='h2'>Chess</Text>
      <Text component='p'>Cool chess game to play with your friends. (Single player mode WIP)</Text>
    </CardContent>
    <CardActions>
      <Button
        dense
        color='primary'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RSG-Group/Chess#rsg-chess'
      >Readme
      </Button>
      <Button
        dense
        color='primary'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RSG-Group/Chess'
      >Repository
      </Button>
      <Link href='/chess' prefetch><Button dense color='primary'>Demo</Button></Link>
    </CardActions>
  </Card>
)
