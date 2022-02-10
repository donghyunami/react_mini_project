import { useContext } from 'react';
import { UserContext } from '../store/userContext';
import { Link } from 'react-router-dom';

function Nav(props) {
  const { isAuth } = useContext(UserContext);
  console.log(isAuth);
  return (
    <nav>
      <ul>
        <li>
          {isAuth ? (
            <Link to="login">로그아웃</Link>
          ) : (
            <Link to="login">로그인</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
