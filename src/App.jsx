import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Details from './page/Details'
import Favorites from './page/Favorites'
import Home from './page/Home'
import NotFound from './page/NotFound'
import Logo from './atoms/Logo'



export default function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <div className="row">
          <div className="col-lg-7">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/pokemon/:id" element={<Home />} />
              <Route path='/favoritos' element={<Favorites />} />
              <Route path='/favorito/:id' element={<Favorites />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Logo
              src='/logo-elan-sk.svg'
              link='https://elan-sk.github.io/'
            />
          </div>
          <div className="col-lg-5">
            <Routes>
              <Route path='/' element={<Details />} />
              <Route path='/pokemon/:id' element={<Details />} />
              <Route path='/favoritos' element={<Details />} />
              <Route path='favorito/:id' element={<Details />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
