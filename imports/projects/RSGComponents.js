// @flow
// Get React.
import React from 'react'
// Get Material UI.
import {Card, CardContent, CardMedia, Button, CardActions, Typography as Text} from 'material-ui'

export default () => (
  <Card style={{width: '24%'}} raised>
    <br /><br /><br />
    <CardMedia style={{textAlign: 'center'}}>
      <img
        src='https://cdn.rawgit.com/RSG-Group/rsg-components/7ba330af/images/xxl_button.png'
        alt='A button in RSG-Components.'
      />
    </CardMedia>
    <CardContent>
      <div style={{height: '11pt'}} />
      <Text type='headline' component='h2'>RSG-Components</Text>
      <Text component='p'>Some React components with beautiful styling.</Text>
    </CardContent>
    <CardActions>
      <Button
        dense
        color='primary'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RSG-Group/rsg-components#RSG-Components'
      >Readme
      </Button>
      <Button
        dense
        color='primary'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RSG-Group/rsg-components'
      >Repository
      </Button>
      <Button
        dense
        color='primary'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RSG-Group/rsg-components/wiki'
      >Wiki
      </Button>
    </CardActions>
  </Card>
)
