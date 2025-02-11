import React, { createContext } from 'react';
import UserProvider from './UserProvider';

export const data = createContext();
const UserContext = () => {
  const name = "Yadneya";
  return (
    <div>
        <data.Provider value={ name }>
            <UserProvider />
        </data.Provider>
    </div>
  )
}

export default UserContext