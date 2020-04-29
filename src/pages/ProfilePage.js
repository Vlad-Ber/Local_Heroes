import React from 'react';

import NavBar from '../components/NavBar.js';
import TextButton from '../components/TextButton.js';
import LinkWrapper from '../components/LinkWrapper.js';

const ProfilePage = (props) => {
    return (
        <div>
            <NavBar
                leftButtonType="back"
                leftButtonLink="/home"
            />
            <LinkWrapper to="/">
                <TextButton onClick={localStorage.clear()} description="LOG OUT"/>
            </LinkWrapper>
        </div>
    );
}

export default ProfilePage;
