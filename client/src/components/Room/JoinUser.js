import React, { useState } from 'react';

import '../Join/Join.css';

const JoinUser = ({ joinRoomAsUser }) => {
    const [name, setName] = useState('');

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Make a Username</h1>
                <div><input placeholder='Username' className='joinInput' type='text' onChange={(event) => setName(event.target.value)} /></div>
                <button className='button mt-20' onClick={(event) => name ? joinRoomAsUser(name) : null}>Set Username</button>
            </div>
        </div>
    )
}

export default JoinUser;