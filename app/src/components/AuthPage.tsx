import { useAuth0 } from "@auth0/auth0-react"

const AuthPage: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0()
  
  return (
    <div>
        {isAuthenticated ? (
            <>
               <h1>Welcome, {user?.name || 'User'}!</h1>
               <button onClick={() => logout({ logoutParams: {returnTo: window.location.origin} })}>Logout</button>  
            </>
        ) : (
            <button onClick={() => loginWithRedirect()}>Login</button>
          )
        }
    </div>
  )
}
export default AuthPage