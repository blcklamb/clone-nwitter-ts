import { authService, firebaseInstance } from './fbase';
import AuthForm from './AuthForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { AuthContainer, AuthButton } from './Auth.style'

function Auth() {
  // log 한 번 찍어보기
  const onSocialClick = async (event: any) => {
    const {
      target: { name },
    } = event
    let provider
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider()
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubProvider()
    }
    const data = await authService.signInWithPopup(provider)
  }
  return (
    <AuthContainer>
      <FontAwesomeIcon
        icon={faTwitter}
        color={'#04AAFF'}
        size="3x"
        style={{ marginBottom: 30 }}
      />
      <AuthForm />
      <AuthButton>
        <button
          onClick={onSocialClick}
          name="google"
          className="authBtn"
        ></button>
      </AuthButton>
    </AuthContainer>
  )
}

export default Auth
