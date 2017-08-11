// @flow
// Get React.
import React from 'react'
// Get Material UI.
import {Card, CardContent, CardMedia, Button, CardActions, Typography as Text} from 'material-ui'
// Get Link to route to the demo.
import Link from 'next/link'

export default () => (
  <Card style={{width: '24%'}} raised>
    <br />
    <CardMedia style={{textAlign: 'center'}}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/f/ff/Line-Line_Intersection.png'
        alt='Chess demo.'
        height='105pt'
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
        href='https://github.com/RSG-Group/rsg-group.github.io/tree/master/intersection#simple-mini-library-for-finding-line-and-line-segment-intersection'
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
      <Link href='/intersection' prefetch><Button dense color='primary'>Website</Button></Link>
    </CardActions>
  </Card>
)
