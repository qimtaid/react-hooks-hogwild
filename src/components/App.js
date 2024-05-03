import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import hogs from "../porkers_data";

function App() {
    const [greasedFilter, setGreasedFilter] = useState(false);
    const [sortType, setSortType] = useState(""); // "name" or "weight"

    // Function to handle greased filter toggle
    const toggleGreaseFilter = () => {
        setGreasedFilter(!greasedFilter);
    };

    // Function to handle sorting change
    const handleSortChange = (sortKey) => {
        setSortType(sortKey);
    };

    // Filter and sort hogs as needed
    const filteredHogs = hogs
        .filter(hog => !greasedFilter || hog.greased)
        .sort((a, b) => {
            if (sortType === "name") {
                return a.name.localeCompare(b.name);
            } else if (sortType === "weight") {
                return a.weight - b.weight;
            }
            return 0;
        });

    return (
        <div className="App">
            <Nav />
            <button onClick={toggleGreaseFilter}>
                {greasedFilter ? "Show All" : "Filter Greased"}
            </button>
            <button onClick={() => handleSortChange("name")}>Sort by Name</button>
            <button onClick={() => handleSortChange("weight")}>Sort by Weight</button>
            <div className="ui grid container">
                {filteredHogs.map(hog => (
                    <Tile key={hog.name} hog={hog} />
                ))}
            </div>
        </div>
    );
}

export default App;
