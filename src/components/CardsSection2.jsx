import Cards from "./Cards";
import cardimg1 from "../st3images/cardsect2/Frame 151 (1).png";
import cardimg2 from "../st3images/cardsect2/Frame 151 (2).png";
import cardimg3 from "../st3images/cardsect2/Frame 151 (3).png";
import cardimg4 from "../st3images/cardsect2/Frame 151 (4).png";
import cardimg5 from "../st3images/cardsect2/Frame 151 (5).png";
import cardimg6 from "../st3images/cardsect2/Frame 151 (6).png";
import cardimg7 from "../st3images/cardsect2/Frame 151 (7).png";
import cardimg8 from "../st3images/cardsect2/Frame 151 (8).png";
import cardimg9 from "../st3images/cardsect2/Frame 151 (9).png";
import cardimg10 from "../st3images/cardsect2/Frame 151 (10).png";
import cardimg11 from "../st3images/cardsect2/Frame 151 (11).png";
import cardimg12 from "../st3images/cardsect2/Frame 151 (12).png";
import cardimg13 from "../st3images/cardsect2/Frame 151 (13).png";
import cardimg14 from "../st3images/cardsect2/Frame 151 (14).png";
import cardimg15 from "../st3images/cardsect2/Frame 151 (15).png";
import cardimg16 from "../st3images/cardsect2/Frame 151 (16).png";

export default function CardsSection2() {
  return (
    <>
      <div className='cards-div'>
        <div className='cards-div sect-2'>
          <Cards img={cardimg1} />
          <Cards img={cardimg2} />
          <Cards img={cardimg3} />
          <Cards img={cardimg4} />
          <Cards img={cardimg5} />
          <Cards img={cardimg6} />
          <Cards img={cardimg7} />
          <Cards img={cardimg8} />
          <Cards img={cardimg9} />
          <Cards img={cardimg10} />
          <Cards img={cardimg11} />
          <Cards img={cardimg12} />
          <Cards img={cardimg13} />
          <Cards img={cardimg14} />
          <Cards img={cardimg15} />
          <Cards img={cardimg16} />
        </div>
      </div>
    </>
  );
}
