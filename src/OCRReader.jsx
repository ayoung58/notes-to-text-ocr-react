// OCRReader Component

import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

const OCRReader = () => {
    // useState() hook: first variable is the data, second is used to change the data
    // allows us to set the data of a variable
    // initially, image is null, but if 1.png is uploaded, setImage is 1.png, and image is set to 1.png
    const [image, setImage] = useState(null);

    const handleImageChange = (imageData) => {
        setImage(imageData);
    };

    return (
        <div>
            {/* interanlly uses and sets the parameter of ImageUpload component */}
            <ImageUpload onImageChange={handleImageChange} />
            {/* if image is not null, show the image with HTML */}
            {image && (
                <div>
                    <img 
                        src={image} 
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%"
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default OCRReader;