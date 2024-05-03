import React from 'react'

function Filter({filterText}) {
  
  return (
    <div>
      {filterText.map((hog)=>(
        <div key={hog.name}> 
        <div>Name: {hog.name}</div>
        <div>Specialty: {hog.specialty}</div>
        <div>Weight: {hog.weight}</div>
        <div>Greased: {hog.greased? "Yes" : "No"}</div>
        </div>
      )) }

      
    </div>
  );
}

export default Filter
