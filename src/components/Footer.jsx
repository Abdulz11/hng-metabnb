import logohouse from "../st3images/footer/Vector (5).png";
import logoname from "../st3images/footer/Vector (6).png";
import logoC from "../st3images/footer/Vector (4).png";
import logoinsta from "../st3images/footer/instagram-216-721958.png";
import logotwitter from "../st3images/footer/Vector (3).png";
import logofacebook from "../st3images/footer/Vector (2).png";

export default function Footer() {
  return (
    <footer>
      <div className='footer-div'>
        <div className='logo-section'>
          <div>
            <img src={logoname} alt='' />
            <img src={logohouse} alt='' />
          </div>
          <div className='socials'>
            <img src={logofacebook} alt='' />
            <img src={logoinsta} alt='' />
            <img src={logotwitter} alt='' />
          </div>
          <div>
            <img src={logoC} alt='' />
            <p>2022 Metabnb</p>
          </div>
        </div>
        <div>
          <h3>Community</h3>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div>
          <h3>Places</h3>
          <p>Castle</p>
          <p>Farms</p>
          <p>Beaches</p>
          <p>Learn More</p>
        </div>
      </div>
    </footer>
  );
}
