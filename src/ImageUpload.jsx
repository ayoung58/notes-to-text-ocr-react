// ImageUpload Component

import React from 'react';

// Create a function ImageUpload
const ImageUpload = () => {

    return (
        <div>
            {/* only accept a file input, and can only be images */}
            <input type="file" accept="image/*" />
        </div>
    )
};

// from this file, we export one component: ImageUpload
export default ImageUpload;