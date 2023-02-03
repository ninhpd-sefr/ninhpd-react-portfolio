import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'contact', 'work', 'skills', 'testiminials'].map(((item, index) => (
                <li key={item}>
                    <a
                        href={`#${item}`}
                        key={item + index}
                        className="app__navigation-dot"
                        style={active === item ? { backgroundColor: '#313BAC' } : {}}
                    />
                </li>
            )))}
        </div>
    )
}

export default NavigationDots