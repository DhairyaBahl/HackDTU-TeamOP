import './Pdf.css';

function Pdf(props){

    const finalArray = props.files.filter(file=>Object.keys(file).length>0)

    console.log(finalArray);    
    

    return(
        <div className="pdfpage">
           
            <h2 >1ST SEMESTER</h2>
                
                {finalArray.map(object=>{
                    console.log(object)

                    for (const o in object) {
                        <div className="imagediv" >
                            {console.log(object[o].image)}
                            <img src={object[o].image} className="image"  />
                            <button><a href={o.pdf} className="pdf"  ></a></button><br/><br/>   
                        </div>
                    }
                })}
                <br/><br/><br/><br/>

        </div>

    )
}

export default Pdf;