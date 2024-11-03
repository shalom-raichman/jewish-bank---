import { Route, Routes } from 'react-router-dom'
import AuthRouter from './components/auth/AuthRouter'
import PagesRouter from './components/pages/PagesRouter'
import LoginGuard from './components/guardes/loginGuard'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='auth/*' element={<AuthRouter />} />
        <Route
          path='pages/*'
          element={
            <LoginGuard>
              <PagesRouter />
            </LoginGuard>
          }
        />
      </Routes>
    </div>
  )
}

export default App
