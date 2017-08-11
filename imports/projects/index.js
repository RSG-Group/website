// @flow
// Get all our different project cards.
import RSGComponents from './RSGComponents'
import HyperBackground from './hyper-background'
import Chess from './Chess'
import Intersection from './Intersection'
// Get React.
import React from 'react'
// material-ui Grid for responsive layout.
import Grid from 'material-ui/Grid'

export default () => (
  <Grid container>
    <Grid item xs><RSGComponents /></Grid>
    <Grid item xs><HyperBackground /></Grid>
    <Grid item xs><Chess /></Grid>
    <Grid item xs><Intersection /></Grid>
  </Grid>
)
