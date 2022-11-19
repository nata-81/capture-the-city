import { useState, useEffect } from "react";

const ListView = (props) => {
    let maxPreviewLen = 64;

    /*
    let uploads = [
        {link: "https://www.google.com", title: "title1", content: "the brown fox jumped over the lazy dog which went down the tum slide at hackaTUM"},
        {link: "https://archlinux.org/", title: "title2", content: "never gonna give you up never gonna let you down never gonna run around or desert you. I just wanna tell you how I'm feeling!"}
    ]
    */

    
    const [uploads, setUploads] = useState([]);

    useEffect(() => {
        getUploads();
    }, [])
    
    
    let getUploads = async() => {
        let response = await fetch('http://127.0.0.1:8000/uploads/');
        let data = await response.json();
        setUploads(data);
    }

    return (
        <div className="list_cards" style={{ overflow: 'auto' }}>
            { /* loop through uploads array */ }
            {uploads.map((upload, i) => (
                <>
                <h3 className="upload_title" onClick={()=> props.setTrigger(true)}>{upload.title}</h3>
                <p className="upload_content_preview">{upload.content.slice(0, maxPreviewLen) + "..."}</p>
                {/* line divider */}
                {i + 1 < uploads.length ? <hr></hr> : ''}                
                </>
            ))}
        </div>
    )
}

export default ListView;