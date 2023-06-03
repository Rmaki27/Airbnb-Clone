


export default function Card(props) {
    return (
    <div className="card">
        <img src={props.mainImg} className="card--image" alt="katie zaferes card" />
        <div className="card--stats">
            <img src={props.starImg} className="card--star" alt="star icon" />
            <p>{props.rating} <span className="gray">({props.reviewCount}) •</span> <span className="gray">USA</span> </p>
        </div>
        <p>{props.bio}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
    )
}