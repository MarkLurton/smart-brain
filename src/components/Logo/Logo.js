import React from 'react';
import Tilt from 'react-tilt';
import brain from './mental-health.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55, reverse: true }} style={{ height: 150, width: 150 }} >
                 <div className="Tilt-inner"><img alt='logo' src={brain}/></div>
            </Tilt>
        </div>
    )
}

export default Logo;