import * as React from 'react'

import { Button, Typography, Divider } from '@material-ui/core'

const Project = (props: {
  name: string,
  image: string,
  description: string,
  buttons: Array<{ name: string, url?: string }>
}) => (
  <>
    <div style={{ display: 'flex', padding: 20, flexDirection: 'row' }}>
      <img src={props.image} height='200' width='200' />
      <div style={{ height: 20, width: 20 }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <Typography variant='h2' gutterBottom>{props.name}</Typography>
        <Typography variant='subtitle1' gutterBottom>{props.description}</Typography>
        <div style={{ display: 'flex', paddingTop: 10 }}>
          {props.buttons.map(i => (
            <div key={i.name} style={{ paddingRight: 10 }}>
              <Button color='primary' variant='contained' href={i.url}>{i.name}</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Divider />
  </>
)

export default Project
