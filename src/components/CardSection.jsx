import Cards from "./Cards";
import cardimg1 from "../st3images/cards/Frame 151.png";
import cardimg2 from "../st3images/cardsec1/Frame 151 (1).png";
import cardimg3 from "../st3images/cardsec1/Frame 151 (2).png";

import cardimg4 from "../st3images/cardsec1/Frame 151 (3).png";

import cardimg5 from "../st3images/cardsec1/Frame 151 (4).png";
import cardimg6 from "../st3images/cardsec1/Frame 151 (5).png";
import cardimg7 from "../st3images/cardsec1/Frame 151 (6).png";
import cardimg8 from "../st3images/cardsec1/Frame 151 (7).png";

export default function CardSection() {
  return (
    <div>
      <section className='card-section'>
        <h2>Inspiration for your next adventure</h2>
        <div className='cards-div'>
          <Cards img={cardimg1} />
          <Cards img={cardimg2} />
          <Cards img={cardimg3} />
          <Cards img={cardimg4} />
          <Cards img={cardimg5} />
          <Cards img={cardimg6} />
          <Cards img={cardimg7} />
          <Cards img={cardimg8} />
        </div>
      </section>
    </div>
  );
}
