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
        <div>
            <h1>Hello! This is OCRReaderV2</h1>
        </div>
    )
}

export default OCRReaderV2;