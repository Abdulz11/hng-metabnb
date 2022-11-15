import logo1 from "../st3images/nav/Vector (1).png";
import logo from "../st3images/nav/Vector.png";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function NavSmall(props) {
  return (
    <nav>
      <div className='nav-container typo '>
        <Link onClick={() => props.setModal(false)} className='img-div' to='/'>
          <img src={logo1} alt='houselogo' />
          <img src={logo} alt='metabnb logo' />
        </Link>
        <span onClick={() => props.setMenu(true)} className='hamburg'>
          <HiMenu style={{ fontSize: "40px" }} />
        </span>
        <button onClick={() => props.setModal(true)} className='btn'>
          Connect Wallet
        </button>
        {props.menu && (
          <div className='menu'>
            <span onClick={() => props.setMenu(false)}>
              <IoMdClose style={{ cursor: "pointer", fontSize: "1.5rem" }} />
            </span>
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
        )}
      </div>
    </nav>
  );
}
