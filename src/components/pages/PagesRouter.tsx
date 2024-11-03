import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Transactions from './Transactions'
import Credit from './Credit'
import NavBar from './NavBar'

const PagesRouter = () => {
  return (
    <div className='main'>
      <div className='left'>
        <NavBar />
      </div>
      <div className='right'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/credit' element={<Credit />} />
          <Route path='/transactions' element={<Transactions />} />
        </Routes>
      </div>
    </div>
  )
}

export default PagesRouter
