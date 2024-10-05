import React, { useEffect, useRef, useState } from "react";
import Vibrant from "node-vibrant";
import "../MenteeCard.css";

const MenteeCard = ({ imgSrc, imgAlt, title }) => {
    const [dominantColor, setDominantColor] = useState(""); 
    const imgRef = useRef(null);

    const handleImageLoad = () => {
        const img = imgRef.current;

        if (img) {
            Vibrant.from(img)
                .getPalette()
                .then((palette) => {
                    const vibrantColor = palette.Vibrant.hex; 
                    setDominantColor(vibrantColor); 
                })
                .catch((err) => {
                    console.error("Error extracting color:", err);
                });
        }
    };

    return (
        <div className="card-container">
            <img
                src={imgSrc}
                alt={imgAlt}
                className="card-img"
                ref={imgRef}
                crossOrigin="anonymous" 
                onLoad={handleImageLoad} 
            />
            <h1 className="card-title" style={{ color: dominantColor }}>
                {title}
            </h1>
        </div>
    );
};

export default MenteeCard;

// import React from "react";
// import "../MenteeCard.css";

// export default function MenteeCard({ imgSrc, imgAlt, title }) {
//     return (<>
//     <div className="card-container">
//       {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className="card-img" />}
//       {title && <h1 className="card-title">{title}</h1>}
//     </div>
//     </>
//     );
// }