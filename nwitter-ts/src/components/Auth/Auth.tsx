import { authService, firebaseInstance } from './fbase'
import AuthForm from './AuthForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import { AuthContainer, AuthButton } from './Auth.style'

function Auth() {
  // log 한 번 찍어보기
  const onSocialClick: React.MouseEventHandler<HTMLButtonElement> = async event => {
    const {
      currentTarget: { name },
    } = event
    let provider
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider()
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider()
    }
    if (provider) {
      const data = await authService.signInWithPopup(provider)
    }
  }
  return (
    <AuthContainer>
      <FontAwesomeIcon icon={faTwitter} color={'#04AAFF'} size="3x" style={{ marginBottom: 30 }} />
      <AuthForm />
      <AuthButton onClick={onSocialClick} name="google">
        Continue with Google <FontAwesomeIcon icon={faGoogle} />
      </AuthButton>
      <AuthButton onClick={onSocialClick} name="github">
        Continue with Github <FontAwesomeIcon icon={faGithub} />
      </AuthButton>
    </AuthContainer>
  )
}

export default Auth
