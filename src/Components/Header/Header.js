import './Header.css';

function Header(){

    const submit=(event)=>{
        event.preventDefault();

    }

    return (
    <nav className="header">
        <div className="highlight">
            <a href="#HOME">HOME</a>
            <a href="#DASHBOARD">Dashboard</a>
            <form>
            <input type="file" accept=".pdf" className="custom-file-input" ></input>
            <button className="submit" onChange={submit} type='submit'>Upload Pdf</button>
            </form> 
            <a href="#CONTACT" className="contactus" >Contact Us</a>
        </div>

    </nav>
    )
}

export default Header;