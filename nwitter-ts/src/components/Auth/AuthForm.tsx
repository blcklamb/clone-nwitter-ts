import { authService, firebaseInstance } from './fbase'
import { useState } from 'react'
import {
  AuthFormContainer,
  AuthFormInput,
  AuthFormSubmit,
  AuthSwitch,
} from './Auth.style'

function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState('')

  const onChange = (event: any) => {
    const {
      target: { name, value },
    } = event
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const onSubmit = async (event: any) => {
    event.preventDefault()
    try {
      let data
      if (newAccount) {
        // create newAccount
        data = await authService.createUserWithEmailAndPassword(email, password)
      } else {
        // log in
        data = await authService.signInWithEmailAndPassword(email, password)
      }
    } catch (error: any) {
      setError(error.message)
    }
  }
  const toggleAccount = () => setNewAccount(prev => !prev)
  return (
    <div>
      <AuthFormContainer onSubmit={onSubmit}>
        <AuthFormInput
          type="text"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        ></AuthFormInput>
        <AuthFormInput
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        ></AuthFormInput>
        <AuthFormSubmit
          type="submit"
          value={newAccount ? 'Create Account' : 'Log In'}
        />
        <br />
        {error && <span className="authError">{error}</span>}
      </AuthFormContainer>
      <AuthSwitch onClick={toggleAccount}>
        {newAccount ? 'Sign In' : 'Create Account'}
      </AuthSwitch>
    </div>
  )
}

export default AuthForm
