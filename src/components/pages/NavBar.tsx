import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>
            <NavLink to={'/pages'} end>Home</NavLink>
            <NavLink to={'/pages/credit'}>Credit</NavLink>
            <NavLink to={'/pages/transactions'}>Transactions</NavLink>
    </div>
  )
}

export default NavBar