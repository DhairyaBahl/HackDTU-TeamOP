import './Pdf.css';

function Pdf(props){
    return(
        <div className="pdfpage">
           
            <h2 >{props.subjects[props.active]}</h2>
                
                {props.files.map(file=>
                <div className="imagediv">
                    {/** */}
                    <img src={file.image} className="image"/>
                    <button><a href={file.pdf} className="pdf">{file.name}</a></button><br/><br/>
                </div>
                )}
                <br/><br/><br/><br/>

        </div>

    )
}

export default Pdf;