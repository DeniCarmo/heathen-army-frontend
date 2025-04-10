import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Listing } from './views/Listing'
import { Header } from './components/common/Header'
import { Login } from './views/Login'
import { ProtectedRoutes } from './utils/ProtectedRoutes'
import { Admin } from './views/Admin'
import { useEffect } from 'react'
import { useAppDispatch } from './hooks/hooks'
import { fetchUser } from './store/userSlice'

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  },[]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:category" element={<Listing/>}/>
        <Route path="/auth/login" element={<Login/>} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<Admin/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
