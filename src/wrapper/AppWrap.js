import React from 'react'
import {NavigationDots, SocicalMedia} from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocicalMedia />

        <div className='app__wrapper app__flex'>
            <Component />

            <div className='copyright'>
                <p className='p-text'>@2023 NINH</p>
                <p className='p-text'>ALL rights reserved</p>
            </div>
        </div>

        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap;