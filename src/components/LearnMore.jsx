import logos from "../st3images/tripleimg/Frame 59546.png";

export default function LearnMore() {
  return (
    <section>
      <div className='learn-more'>
        <div className='details'>
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className='btn-more'>Learn more</button>
        </div>
        <div className='tripleimg'>
          <img src={logos} alt='' />
        </div>
      </div>
    </section>
  );
}
