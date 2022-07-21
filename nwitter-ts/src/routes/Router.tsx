import { HashRouter, Route, Routes } from 'react-router-dom'
import Auth from 'components/Auth/Auth'

import { RouterContainer } from './Router.style'

export default function Router({}) {
  return (
    <HashRouter>
      <RouterContainer>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </RouterContainer>
    </HashRouter>
  )
}
