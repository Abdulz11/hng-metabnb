import image1 from "../st3images/nav/image 3.png";
import image2 from "../st3images/nav/image 4.png";
import image3 from "../st3images/nav/image 5.png";
import image4 from "../st3images/nav/image 6.png";
// companylogo
import comlogo1 from "../st3images/companylogo/Group 4038.png";
import comlogo2 from "../st3images/companylogo/Group 4039.png";
import comlogo3 from "../st3images/companylogo/Group 59536.png";
import comlogo4 from "../st3images/companylogo/logo.png";
import comlogo5 from "../st3images/companylogo/MBToken.png";

export default function HeroHome() {
  return (
    <>
      <div className='hero-home'>
        <div className='details-hero'>
          <h2>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h2>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className='hero-input'>
            <input type='text' placeholder='Search for location' />
            <button>Search</button>
          </div>
        </div>
        <div className='img-hero'>
          <div>
            <img src={image2} alt='' />
            <img src={image4} alt='' />
          </div>
          <div>
            <img src={image1} alt='' />
            <img src={image3} alt='' />
          </div>
        </div>
      </div>
      <div className='company-banner'>
        <div>
          <img src={comlogo3} alt='' />
          <img src={comlogo5} alt='' />
        </div>
        <div>
          <img src={comlogo1} alt='' />
          <img src={comlogo2} alt='' />
        </div>
        <div>
          <img src={comlogo4} alt='' />
          <h2>OpenSea</h2>
        </div>
      </div>
    </>
  );
}
