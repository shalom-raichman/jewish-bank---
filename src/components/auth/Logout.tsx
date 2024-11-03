import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigator = useNavigate()
  const handelLogout = () => {
    localStorage.setItem('isLogin', '')
    navigator('/auth/login')
  }
  return (
    <div>
      <img onClick={handelLogout} src="src\assets\red-circle-logout-arrow-20586 (2).png" alt="not " />
    </div>
  )
}

export default Logout