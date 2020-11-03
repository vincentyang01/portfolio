import React from 'react';
import Typical from 'react-typical'
import me from '../media/me.jpeg'

function Main () {
    return (
        <div className="custom-section">
            <div className="aboutme-container">
                <img className='profile-pic' alt="profile-pic" src={me}/>
                <h1>Hi, my name is Jennifer Yoo</h1>
                <h1> I am a <Typical
                        steps={['software engineer', 1500, 'full stack developer', 1500, 'dog mom', 1500, 'plant enthusiast', 1500]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </h1>
            </div>
        </div>
    )
}

export default Main 