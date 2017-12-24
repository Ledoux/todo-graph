import React from 'react'

const TeleportWelcome = ({templates}) => {
  return (
    <div className='teleport center p2'>
      <div className='teleport__logo mb3'>
        <img className='teleport__logo__img' src='https://raw.githubusercontent.com/snipsco/teleport/master/icons/icon-white.png' />
      </div>
      <h2 className='mb1'>
        Welcome!
      </h2>
      <div className='teleport__text mb3'>
        This app was made using
        <a className='teleport__text__href'
          href='https://github.com/snipsco/teleport'
          target='_blank' >
          Teleport
        </a>
      </div>
      <div className='teleport__templates p2 mb3'>
        <div className='flex justify-center items-center'>
          {
            templates.map((template, index) => (
              <div key={index} className='mr2'>
               <a title={template.name}
                 href={template.gitUrl} >
                  <img className='teleport__templates__img' src={template.iconUrl} />
               </a>
              </div>
            ))
          }
        </div>
      </div>
      <div className='teleport__footer'>
        From the Snips Tooling Team
      </div>
    </div>
  )
}

TeleportWelcome.defaultProps = {
  templates: []
}

export default TeleportWelcome
