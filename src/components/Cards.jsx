
import star from "../st3images/cards/Star 2.png"
export default function Cards(props) {
  return (
    <div className="card">
        <div className="card-img">
            <img src={props.img} alt="" />
        </div>
        <div className="card-details">
            <div>
                <p className="name">Desert king</p>
                <p className="pay">1MBT per night</p>
            </div>
            <div>
                <p className="distance">2345km away</p>
                <p className="available">available for 2weeks stay</p>
            </div>
            <span className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </span>
        </div>
    </div>
  )
}
