import Wrapper from '../assets/wrappers/AdminNavbar';
import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import LogoutContainer from './LogoutContainer';
const Navbar = () => {

  return (
    <Wrapper>
      <div className='nav-center'>
      <a href="/" className="logoLink">
        <div>
          <Logo />
        </div>
        </a>
        <div className='btn-container'>
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
