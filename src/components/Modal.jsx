import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import firstlogo from "../st3images/modal/image 66.png";
import seclogo from "../st3images/modal/image 69.png";

export default function Modal(props) {
  return (
    <div className='modal-container'>
      <div className='modal-card'>
        <div className='title'>
          <h2>Connect Wallet</h2>
          <span className='btn-close' onClick={() => props.setModal(false)}>
            <IoMdClose style={{ cursor: "pointer" }} />
          </span>
        </div>
        <div className='body'>
          <div className='instruction'>Choose your preferred wallet:</div>
          <div className='first-tab'>
            <div>
              <img src={firstlogo} alt='' />
            </div>
            <h3>Metamask</h3>
            <span>
              <IoIosArrowForward style={{ color: "#959DA6" }} />
            </span>
          </div>
          <div className='sec-tab'>
            <div>
              <img src={seclogo} alt='' />
            </div>
            <h3>WalletConnect</h3>
            <span>
              <IoIosArrowForward style={{ color: "#959DA6" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
