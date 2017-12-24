import React from 'react'
import { Warning } from 'transactions-interface-web'

const ConstructionPage = () => {
  return (<div className='page construction-page main'>
    <Warning icon='exclamation' text={`The website is still under construction.
      Please come back on Monday, March 27.
      `}/>
  </div>)
}

export default ConstructionPage
