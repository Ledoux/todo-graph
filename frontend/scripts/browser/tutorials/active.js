import React from 'react'

export const style = {
  arrowStyle: {
    color: '#99d6e6',
    borderColor: 'transparent'
  },
  style: {
    background: 'transparent',
    padding: 0
  }
}

export const active = [
  {
    arrow: 'top',
    ChildComponent: props => (
      <p>
        Click here to make continue the tutorial
      </p>
    ),
    getIsVisible: ({ pathname }) => pathname === '/dashboard',
    parent: '.feed-interaction__slot__button--deep',
    position: 'bottom',
    stepIndex: 0,
    style
  },
  {
    arrow: 'top',
    ChildComponent: props => (
      <p>
        Click here to verify the claim scientific credibility
      </p>
    ),
    getIsVisible: ({ pathname }) => pathname === '/dashboard',
    isForceDisappear: true,
    isLast: true,
    parent: '.feed-interaction__slot__button--claim',
    position: 'bottom',
    stepIndex: 1,
    style,
    text: 'Got it!'
  }
]

export default active
