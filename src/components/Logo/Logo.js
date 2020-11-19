import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <div className='hole'>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 125, width: 125 }} >
                    <div className="Tilt-inner pa3">
                        <img style={{paddingTop: '5px'}} alt='logo' src={face}></img>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}

export default Logo;