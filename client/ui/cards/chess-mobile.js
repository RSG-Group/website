// @flow
// Get React.
import React from 'react'
// Get Material UI.
import { Card, CardContent, CardMedia, Button, CardActions, Typography as Text } from 'material-ui'

export default () => (
  <Card raised>
    <br />
    <CardMedia style={{ textAlign: 'center' }}>
      <img
        src='/static/rsg-chess-mobile.png'
        alt='RSG-Chess-mobile.'
      />
    </CardMedia>
    <CardContent>
      {/* <div style={{ height: '11pt' }} /> */}
      <Text type='headline' component='h2'>RSG-Chess-mobile</Text>
      <Text component='p'>Mobile version of RSG-Chess.</Text>
    </CardContent>
    <CardActions>
      <Button
        dense
        color='primary'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RSG-Group/RSG-Chess-mobile#RSG-Chess-mobile'
      >Readme
      </Button>
      <Button
        dense
        color='primary'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RSG-Group/RSG-Chess-mobile'
      >Repository
      </Button>
      <Button
        dense
        color='primary'
        target='_blank'
        rel='noopener noreferrer'
        href='https://build.phonegap.com/apps/2773889/builds'
      >Installers
      </Button>
    </CardActions>
  </Card>
)
