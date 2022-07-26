import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { NavUl } from './Navigation.style'

function Navigation(userObj: any) {
  return (
    <nav>
      <NavUl />
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faTwitter} color={'#04AAFF'} size="2x" />
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          style={{
            marginLeft: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 12,
          }}
        >
          <FontAwesomeIcon icon={faUser} color={'#04AAFF'} size="2x" />
          <span style={{ marginTop: 10 }}>
            {userObj.displayName
              ? `Profile of ${userObj.displayName}`
              : 'Profile'}
          </span>
        </Link>
      </li>
    </nav>
  )
}

export default Navigation
