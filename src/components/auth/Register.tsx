import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handelRegister = () => {
    if (!username || !password) return
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    localStorage.setItem('isLogin', 'true')
    navigate('/auth/login')
  }
  return (
    <div>
      <h1>Register</h1>
      <div className='form form-floating'>
        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='floatingInput'>User Name</label>
        </div>

        <div className='form-floating  mb-3'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        <div className=' mb-3'>
          <button
            onClick={handelRegister}
            type='button'
            className='btn btn-outline-success'
            disabled={!username || !password}
          >
            Submit
          </button>
        </div>
        <p>
          dont heve an account yet
          <Link to={'/auth/login'}>sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
