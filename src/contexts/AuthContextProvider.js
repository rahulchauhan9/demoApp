import React, {useContext, useState} from 'react';

const AuthContext = React.createContext();
const UserContext = React.createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState({uid: ''});

  return (
    <AuthContext.Provider value={{token, setToken}}>
      <UserContext.Provider value={(user, setUser)}>
        {children}
      </UserContext.Provider>
    </AuthContext.Provider>
  );
};
