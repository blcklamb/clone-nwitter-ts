import { HashRouter, Route, Routes } from 'react-router-dom'
import Auth from 'components/Auth/Auth'
import Navigation from 'components/Navigation/Navigation'

import { RouterContainer } from './Router.style'

export default function AppRouter({
  isLoggedIn,
  userObj,
  refreshUser,
}: {
  isLoggedIn: boolean
  userObj: object
  refreshUser: () => void
}) {
  return (
    <HashRouter>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <RouterContainer>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Auth />} />
            </>
          ) : (
            <Route path="/" element={<Auth />} />
          )}
        </Routes>
      </RouterContainer>
    </HashRouter>
  )
}
