// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import React from 'react'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <link media='print' rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#283593' />
          <link rel='icon' href='/static/favicon.ico' alt='' />
          <link rel='manifest' href='/static/manifest.json' />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
          <noscript>Your browser does not support JavaScript or it is disabled!</noscript>
        </body>
      </html>
    )
  }
}
