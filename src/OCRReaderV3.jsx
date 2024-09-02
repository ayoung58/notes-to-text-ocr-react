// OCRReaderV3 component

import React, { useState } from "react";
import Tesseract from "tesseract.js";
import ImageUpload from "./ImageUpload";
// import all elements of library, but rename as tf
import * as tf from "@tensorflow/tfjs";

const OCRReaderV3 = () => {

    const [image, setImage] = useState(null);
    const [text, setText] = useState("-----------");
    const [processedImage, setProcessedImage] = useState(null);

    const handleImageChange = ( imageData) => {
        setImage(imageData);
        processImage(imageData);
    };

    const processImage = async (imageData) => {
        // doing what html <img ...> does, but in JavaScript
        const myImg = new Image();
        myImg.src = imageData;

        myImg.onload = async () => {
            const originalWidth = myImg.width;
            const originalHeight = myImg.height;

            // Convert the image to Tensforlow.js tensor
            const tensor = tf.browser.fromPixels(myImg)
            // Pre-processing
            const processedTensor = tf.tidy(() => {
                // 2 is for taking the average across two color channels
                // since grayscale is only two channels
                // so from three colors, we now end up with 2 colors
                let gray = tf.mean(tensor, 2)
                // expand to three dimensions with third being -1
                // we add this third dimension because we need the third one
                gray = tf.expandDims(gray, -1);
                // adjust the contrast
                const contrastFactor = 6;
                // average out the grays
                const mean = gray.mean();
                // subtract the mean of all grays from each gray value
                // multiply by contrastFactor, and then add the mean back
                let adjustedContrast = gray.sub(mean).mul(contrastFactor).add(mean);
                // clipByValue(0, 1) will make all values between 0 and 1 :)
                adjustedContrast = adjustedContrast.clipByValue(0, 1);

                return adjustedContrast;
            });
            // draws out the image, if rank-2 tensor, then draws grayScale (what we want and have, because of third -1 param)
            // if rank-3 tensor, must have depth of 1, 3, 4. With depth 1, draws grayScale.
            const processedImageData = await tf.browser.toPixels(processedTensor);
            const canvas = document.createElement("canvas");
            canvas.width = originalWidth;
            canvas.height = originalHeight;

            // We are plotting a 2D image, so context is 2d
            const ctx = canvas.getContext("2d");
            const imgData = ctx.createImageData(originalWidth, originalHeight);
            // changing the pixels of processed data to actual image
            imgData.data.set(processedImageData);
            // paints the data into iamge at the coordinates
            ctx.putImageData(imgData, 0, 0);
            // to show to the HTML img tag, we need to convert to base 64 encoding
            const processedImageDataUrl = canvas.toDataURL();
            setProcessedImage(processedImageDataUrl);

            // Now we pass the grayscaled image to Tesseract
            Tesseract.recognize(processedImageDataUrl, "eng", {
                logger: (m) => console.log(m)
            }).then(({data: {text}}) => {
                setText(text);
            });

            // free up memory
            processedTensor.dispose();
        };   
    };
    return (
        <div style={{
            textAlign: "center", 
            maxWidth: "900px", 
            margin: "20px auto"
        }}>
        <h3>OCRReaderV3</h3>
            <ImageUpload onImageChange={handleImageChange} />
            {image && (
                <div style={{
                    display: "flex", 
                    justifyContent: "center", 
                    gap: "10px", 
                    marginTop: "20px"
                }}
                >
                <div>
                    <p>Original Image</p>
                    <img
                        src={image}
                        style={{
                            maxWidth:"80%",
                            maxHeight: "auto",
                        }}
                    />
                </div>
                {processedImage && (
                    <div>
                    <p>Processed Image</p>
                    <img
                        src={processedImage}
                        alt="Processed Image"
                        style={{
                            maxWidth:"80%",
                            maxHeight: "auto",
                        }}
                    />
                </div>
                )}
                </div>
            )}
            <div style={{marginTop: "20px"}}>
                <h2>Extracted Text</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default OCRReaderV3;