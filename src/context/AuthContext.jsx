import { createContext,useState  } from 'react';


export const AuthContext = createContext();



export default function AuthProvider({children}) {

    const [token, setToken] = useState(localStorage.getItem("token") || null);


    function storeToken(newToken) {
        localStorage.setItem("token", newToken);
        setToken(newToken);
    }

    function clearToken() {
        localStorage.removeItem("token");
        setToken(null);
    }


  return (
    <AuthContext.Provider value={{ token, storeToken, clearToken }}>
        {children}
    </AuthContext.Provider>
  )
}


