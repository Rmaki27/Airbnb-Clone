import logo from "/public/images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} className="nav--logo" alt="airbnb logo" />
        </nav>
    )
}