// OCRReader Component

import React from "react";
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
        </div>
    )
};

export default OCRReader;