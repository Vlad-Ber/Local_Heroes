import React from 'react'

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer; 

const WithUserContext = (Component) => {
    return (props) => (
        <UserConsumer>
            { (user) => <Component {...props} activeUser={user}/> }
        </UserConsumer>
    );
}

export { WithUserContext, UserContext, UserProvider, UserConsumer };