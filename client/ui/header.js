// Get React and Head to populate <head />
import React from 'react'
import Head from 'next/head'

// Import material-ui and all icons.
import {
  AppBar, Toolbar, Typography as Text, IconButton, Button, Drawer, List, ListItem, ListItemText
} from '@material-ui/core'
import GitHubLogo from './github-logo'
import { string } from 'prop-types'
import MenuIcon from '@material-ui/icons/Menu'

// Import Link from Next.js
import Link from 'next/link'

// Import package.json for trueVersion.
import { trueVersion } from '../../package.json'

// Write our page header.
export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      drawerOpen: false
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
            <Text type='title' component='h1'>RSG</Text>
            <Text type='subheading'>{trueVersion}</Text>
          </div>
          <List style={{
            flex: 'initial'
          }}>
            <Link prefetch href='/'><ListItem button><ListItemText primary='Home' /></ListItem></Link>
            <Link prefetch href='/intersection'><ListItem button><ListItemText primary='Intersection' /></ListItem></Link>
          </List>
        </Drawer>
        <AppBar position='fixed' style={{
          backgroundColor: '#08AEEA',
          backgroundImage: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)'
        }}>
          <Toolbar>
            <IconButton color='contrast' onClick={closeOrOpenDrawer} aria-label='Navigation Menu'><MenuIcon /></IconButton>
            <Link href='/' prefetch>
              <img src='/static/favicon.ico' style={{ marginRight: 10, marginLeft: 10, height: 40, cursor: 'pointer' }} alt='' />
            </Link>
            <Text type='title' color='inherit'>RSG</Text>
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

Header.propTypes = { title: string }
