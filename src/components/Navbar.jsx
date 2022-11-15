import logo1 from "../st3images/nav/Vector (1).png";
import logo from "../st3images/nav/Vector.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar(props) {
  useEffect(() => {
    if (props.menu) {
      props.setMenu(false);
    }
  }, []);
  return (
    <nav>
      <div className='nav-container typo '>
        <Link onClick={() => props.setModal(false)} className='img-div' to='/'>
          <img src={logo1} alt='houselogo' />
          <img src={logo} alt='metabnb logo' />
        </Link>
        <div className='link-div'>
          <Link onClick={() => props.setMenu(false)} to='/'>
            <p>Home</p>
          </Link>
          <Link onClick={() => props.setMenu(false)} to='/placestostay'>
            <p>Place to stay</p>
          </Link>
          <Link onClick={() => props.setMenu(false)}>
            <p>NFTs</p>
          </Link>
          <Link onClick={() => props.setMenu(false)}>
            <p>Community</p>
          </Link>
        </div>
        <button onClick={() => props.setModal(true)} className='btn'>
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
