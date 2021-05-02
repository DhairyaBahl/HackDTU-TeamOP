import './Sidebar.css';

function Sidebar(props){

    return (
        <div className="Sidebar">
            <div className="sidenav">
                <div className="heading"  ><a href="https://github.com/achitJ/HackDTU-TeamOP">Mera Notes</a></div>
                <br/>
{props.subjects.map(subject=><div className={props.subjects.indexOf(subject)===props.active? "active":"" + props.subjects.indexOf(subject)}><a href="#">{subject}</a></div>)}
            </div>
      </div>
    )
}

export default Sidebar