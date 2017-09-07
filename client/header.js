// @flow
// Get React and Head to populate <head />
import React from 'react'
import Head from 'next/head'

// Import material-ui and all icons.
import {AppBar, Toolbar, Typography as Text, IconButton, Button, Drawer, List, ListItem, ListItemText} from 'material-ui'
import GitHubLogo from './ui/github-logo'
import MenuIcon from 'material-ui-icons/Menu'

// Import Link from Next.js
import Link from 'next/link'

// Import package.json for trueVersion.
import { trueVersion } from '../package.json'

// Type out our props and state.
type Props = {
  title: string,
}
type State = {
  drawerOpen: boolean
}

// Declare navigator!
declare var navigator: any

// Write our page header.
export default class Header extends React.Component<void, Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }
  state: State
  componentDidMount = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(err => console.error('Service worker registration failed', err))
    } else {
      console.log('Service worker not supported')
    }
  }
  render () {
    const closeOrOpenDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen })
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <Drawer open={this.state.drawerOpen} onRequestClose={closeOrOpenDrawer}>
          <div style={{margin: 25}}>
            <Text type='title' component='h1'>RSG-Group</Text>
            <Text type='subheading'>{trueVersion}</Text>
          </div>
          <List style={{
            flex: 'initial'
          }}>
            <Link prefetch href='/'><ListItem button><ListItemText primary='Home' /></ListItem></Link>
            <Link prefetch href='/chess'><ListItem button><ListItemText primary='Chess' /></ListItem></Link>
          </List>
        </Drawer>
        <AppBar position='fixed' style={{
          backgroundColor: '#08AEEA',
          backgroundImage: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)'
        }}>
          <Toolbar>
            <IconButton color='contrast' onClick={closeOrOpenDrawer} aria-label='Navigation Menu'><MenuIcon /></IconButton>
            <Link href='/' prefetch>
              <img src='/static/favicon.ico' style={{ marginRight: 10, marginLeft: 10, height: 40 }} alt='' />
            </Link>
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
              <IconButton color='contrast' aria-label='Our GitHub Page'><GitHubLogo /></IconButton>
            </a>
          </Toolbar>
        </AppBar>
        <br /> <br /> <br /> <br />
      </div>
    )
  }
}
