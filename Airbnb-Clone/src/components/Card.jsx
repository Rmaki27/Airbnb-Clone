


export default function Card(props) {
    const {item} = props 

    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={item.coverImg} className="card--image" alt="profile image" />
        <div className="card--stats">
            <img src="../images/star.png" className="card--star" alt="star icon" />
            <p>{item.stats.rating} <span className="gray">({item.stats.reviewCount}) •</span> <span className="gray">{item.country}</span> </p>
        </div>
        <p className="card--title">{item.title}</p>
        <p className="card--price"><span className="bold">From ${item.price}</span> / person</p>
    </div>
    )
}