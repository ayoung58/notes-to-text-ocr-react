// ImageUpload Component

import React from 'react';

// Create a function ImageUpload
// Since App.jsx will use this component, it is the parent
// We can pass information from parent to child using the parentheses
const ImageUpload = ({ onImageChange }) => {

    // new function to handle image upload to read data of image uploaded
    const handleImageUpload = (event) => {
        // saves the data of the uploaded file to selectedFile
        // without zero, then it would save data of all files, useful if can upload multiple
        // since we can only upload one file, we want data of most recent, hence the 0
        const selectedFile = event.target.files[0];

        // if there is a file that has been uploaded
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageChange(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    }
    return (
        <div>
            {/* only accept a file input, and can only be images */}
            {/* onChange: whenever input changes, call handleImageUpload */}
            <input type="file" accept="image/*" onChange={handleImageUpload}/>
        </div>
    )
};

// from this file, we export one component: ImageUpload
export default ImageUpload;