import './Pdf.css';

function Pdf(props){

    const finalArray = props.files.filter(file=>Object.keys(file).length>0)

    console.log(finalArray);    
    

    return(
        <div className="pdfpage">
           
            <h2 >1ST SEMESTER</h2><br/>
                
                {finalArray.map(object=>{

                    for (const o in object) {
                        return (<div className="imagediv" >
                            {console.log(`${object[o].image}`)}
                            <img src="data:image/png;base64,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" className="image" />
                            <button className="glow-on-hover" ><a href={object[o].pdf} className="a">{object[o].name}</a></button><br/><br/><br/>   
                        </div>)
                    }
                })}
                <br/><br/><br/><br/>

        </div>

    )
}

export default Pdf;