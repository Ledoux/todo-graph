import React, { Component } from 'react'

function createPage () {
  class Page extends Component {
    render () {
      return this.props.children
    }
  }
  return Page
}

export default createPage
