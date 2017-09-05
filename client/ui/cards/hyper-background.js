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
        src='/static/hyper-background.png'
        alt='Hyper with hyper-aurora theme and a background added via hyper-background. Pure ZSH theme in use.'
      />
    </CardMedia>
    <CardContent>
      <div style={{height: '15pt'}} />
      <Text type='headline' component='h2'>hyper-background</Text>
      <Text component='p'>Change the background of your Hyper terminal!</Text>
    </CardContent>
    <CardActions>
      <Button
        dense
        color='primary'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RSG-Group/hyper-background#hyper-background'
      >Readme
      </Button>
      <Button
        dense
        color='primary'
        href='https://github.com/RSG-Group/hyper-background'
        target='_blank'
        rel='noopener noreferrer'
      >Repository
      </Button>
    </CardActions>
  </Card>
)
