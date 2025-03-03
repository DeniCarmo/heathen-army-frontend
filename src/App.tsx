import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Listing } from './views/Listing'
import { Header } from './components/common/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:category" element={<Listing/>}/>
      </Routes>
    </>
  )
}

export default App
