import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handelLogin = () => {
    if (
      username &&
      password &&
      localStorage.getItem('username') === username &&
      localStorage.getItem('password') === password
    ) {
      localStorage.setItem('isLogin', 'true')
      navigate('/pages')
    } else {
      alert('please provide valid and maching username and password')
    }
  }
  return (
    <div>
      <h1 className='mb-4 mt-4'>Login</h1>
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
            onClick={handelLogin}
            type='button'
            className='btn btn-outline-success'
            disabled={!username || !password}
          >
            Submit
          </button>
        </div>
        <p>
          dont heve an account yet
          <Link to={'/auth/register'}>Create your own one today!</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
