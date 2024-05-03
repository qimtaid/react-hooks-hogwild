import React, { useState } from 'react';

function Tile({ hog }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="ui eight wide column pigTile" onClick={() => setShowDetails(!showDetails)}>
            <img src={hog.image} alt={hog.name} />
            <h3>{hog.name}</h3>
            {showDetails && (
                <div>
                    <div>Specialty: {hog.specialty}</div>
                    <div>Weight: {hog.weight}</div>
                    <div>Greased: {hog.greased ? "Yes" : "No"}</div>
                    <div>Highest Medal Achieved: {hog['highest medal achieved']}</div>
                </div>
            )}
        </div>
    );
}

export default Tile;
