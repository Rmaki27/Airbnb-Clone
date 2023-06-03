


export default function Card(props) {
    return (
    <div className="card">
        <img src={props.mainImg} className="card--image" alt="profile image" />
        <div className="card--stats">
            <img src="../images/star.png" className="card--star" alt="star icon" />
            <p>{props.rating} <span className="gray">({props.reviewCount}) •</span> <span className="gray">{props.country}</span> </p>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
    )
}