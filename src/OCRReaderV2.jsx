// OCRReaderV2 component

import React from "react";
import ImageUpload from "./ImageUpload";
import Tesseract from "tesseract.js";

const OCRReaderV2 = () => {

    const [image, setImage] = useState(null);
    const [text, setText] = useState("-----------");
    
    const handleImageChange = ( imageData) => {
        setImage(imageData);
        processImage(imageData);
    }

    const processImage = (imageData) => {
        Tesseract.recognize(imageData, "eng", {
            logger: (m) => console.log(m)
        }).then(({data: {text}}) => {
            setText(text);
        });
    };
    return (
        <div style={{textAlign: "center", margin: "auto"}}>
            <h1>Hello! This is OCRReaderV2</h1>
            <ImageUpload onImageChange={handleImageChange} />
            {image && (
                <div style={{maxHeight: "80vh"}}>
                    <img
                        src={image}
                        style={{
                            maxWidth:"100%",
                            maxHeight: "100%",
                        }}
                    />
                </div>
            )}
            <div style={{marginTop: "20px"}}>
                <h2>Extracted Text</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default OCRReaderV2;