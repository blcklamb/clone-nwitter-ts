import { useEffect, useState } from 'react'
import AppRouter from 'routes/Router'
import { authService } from 'components/Auth/fbase'
// Namespace '"/Users/chaejungkim/Desktop/clone-nwitter-ts/nwitter-ts/node_modules/firebase/compat/index"' has no exported member 'UserInfo'.ts(2694)
import type firebase from 'firebase/compat/app'

//??
interface UserObjProps {
  uid: (firebase.UserInfo | null)[]
  displayName: string | null
  updateProfile: (args: any) => Promise<void>
}

function App() {
  const [init, setInit] = useState(false)
  const [userObj, setUserObj] = useState<any>([])

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setUserObj({
          uid: user?.providerData,
          displayName: user?.displayName,
          updateProfile: (args: any) => user?.updateProfile(args),
        })
      } else {
        setUserObj([])
      }
      setInit(true)
    })
  })

  const refreshUser = () => {
    const user = authService.currentUser
    setUserObj({
      uid: user?.uid,
      displayName: user?.displayName,
      updateProfile: (args: any) => user?.updateProfile(args),
    })
  }
  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        '로딩 중입니다...'
      )}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  )
}

export default App
