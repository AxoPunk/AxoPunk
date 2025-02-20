import React, { useState, useEffect } from 'react';

const About = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Replace with your Google Drive folder URL
        const folderUrl = 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID';
        
        // Fetch images from Google Drive folder
        const fetchImages = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='YOUR_FOLDER_ID'+in+parents&key=YOUR_API_KEY`);
                const data = await response.json();
                const imageUrls = data.files.map(file => `https://drive.google.com/uc?export=view&id=${file.id}`);
                setImages(imageUrls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            <h2>About</h2>
            <div className="image-slider">
                {images.map((url, index) => (
                    <img key={index} src={url} alt={`Slide ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default About;