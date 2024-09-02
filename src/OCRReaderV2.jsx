// OCRReaderV2 component

import React, { useState } from "react";
import Tesseract from "tesseract.js";
import ImageUpload from "./ImageUpload";

const OCRReaderV2 = () => {

    const [image, setImage] = useState(null);
    const [text, setText] = useState("-----------");
    
    const handleImageChange = ( imageData) => {
        setImage(imageData);
        processImage(imageData);
    };

    const processImage = (imageData) => {
        Tesseract.recognize(imageData, "eng", {
            logger: (m) => console.log(m)
        }).then(({data: {text}}) => {
            setText(text);
        });
    };
    return (
        <div style={{
            textAlign: "center", 
            maxWidth: "900px", 
            margin: "20px auto"
        }}>
        <h3>OCRReaderV2</h3>
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