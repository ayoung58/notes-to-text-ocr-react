// OCRReader Component

import React, { useState } from "react";
import Tesseract from "tesseract.js";
import ImageUpload from "./ImageUpload";

const OCRReader = () => {
    // useState() hook: first variable is the data, second is used to change the data
    // allows us to set the data of a variable
    // initially, image is null, but if 1.png is uploaded, setImage is 1.png, and image is set to 1.png
    const [image, setImage] = useState(null);
    // set up a hook for tesseract
    const [text, setText] = useState("-----------");

    const handleImageChange = (imageData) => {
        setImage(imageData);
        processImage(imageData);
    };

    // tesseract takes the image data, console log data, image gets converted to text
    // then we set text varaible (initially null) to the text that tesseract gave
    const processImage = (imageData) => {
        Tesseract.recognize(imageData, "eng", {
            logger: (m) => console.log(m),
        }).then(({ data: { text } }) => {
            setText(text);
        });
    };

    return (
        <div style={{
            textAlign: "center",
            maxWidth: "900px",
            // adjust top margin to be 20px
            margin: "20px auto",
        }}>
            {/* interanlly uses and sets the parameter of ImageUpload component */}
            <ImageUpload onImageChange={handleImageChange} />
            {/* if image is not null, show the image with HTML */}
            {image && (
                <div style={{overflow: "auto", maxHeight: "80vh "}}>
                    <img 
                        src={image} 
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%"
                        }}
                    />
                </div>
            )}
            <div style={{ marginTop: "20px", color:"white"}}>
                <h1>Extracted Text:</h1>
                {/* text from line 13, storing the text from tesseract */}
                <p>{text}</p>
            </div>
        </div>
    );
};

export default OCRReader;