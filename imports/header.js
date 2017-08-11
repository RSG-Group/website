// @flow
// Get React and Head to populate <head />
import React from 'react'
import Head from 'next/head'

// Import material-ui and all icons.
import {AppBar, Toolbar, Typography as Text, IconButton, Button, Drawer, List, ListItem, ListItemText} from 'material-ui'
import GitHubLogo from '../imports/github-logo'
import MenuIcon from 'material-ui-icons/Menu'

// Import Link from Next.js
import Link from 'next/link'

// Type out our props and state.
type Props = {
  title: string,
}
type State = {
  drawerOpen: boolean
}

// Write our page header.
export default class Header extends React.Component<void, Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }
  state: State
  render () {
    const closeOrOpenDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen })
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
        </Head>
        <Drawer open={this.state.drawerOpen} onRequestClose={closeOrOpenDrawer}>
          <List style={{
            width: 250,
            flex: 'initial'
          }}>
            <Link prefetch href='/'><ListItem button><ListItemText primary='Home' /></ListItem></Link>
            <Link prefetch href='/chess'><ListItem button><ListItemText primary='Chess' /></ListItem></Link>
            <Link prefetch href='/intersection'><ListItem button><ListItemText primary='Intersection' /></ListItem></Link>
          </List>
        </Drawer>
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton color='contrast' onClick={closeOrOpenDrawer}><MenuIcon /></IconButton>
            <Text type='title' color='inherit'>RSG-Group</Text>
            <div style={{flex: 1}} />
            <Button
              title='Fork me on GitHub'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/RSG-Group/website'
              color='contrast'
        >Fork Me
        </Button>
            <a href='https://github.com/RSG-Group' title='Our GitHub Page' target='_blank' rel='noopener noreferrer'>
              <IconButton color='contrast'><GitHubLogo /></IconButton>
            </a>
          </Toolbar>
        </AppBar>
        <br /> <br /> <br /> <br />
      </div>
    )
  }
}
