import React, { useState } from 'react';
import './names.css'

function Names() {
    const [teamA, setTeamA] = useState("Team A");
    const [teamB, setTeamB] = useState("Team B");

    return (
        <div className="Names row flex-spaces">
            <div className="sm-4 col"><h3> <span className="badge success space-1">A</span>{teamA}</h3></div>
            <div className="sm-4 col"><h3> <span className="badge warning space-1">B</span>{teamB}</h3></div>
        </div>
    )
}

export default Names;