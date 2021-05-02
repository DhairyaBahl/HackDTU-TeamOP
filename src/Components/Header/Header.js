import './Header.css';


function Header(){


    return (
    <nav className="header">
        <div className="highlight">
            <a href="#HOME">HOME</a>
            <a href="#DASHBOARD">Dashboard</a>
            <a href="#UPLOADS">Uploads</a>
            <a href="#CONTACT">Contact Us</a>
        </div>

        <button className="login">
            <a href="#LOGIN">Login</a>
        </button>
    </nav>
    )
}

export default Header;