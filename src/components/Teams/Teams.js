
import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';

const Teams = (props) => {
    // console.log(props.team)
    const {strTeam, strTeamBadge, strLeague, idTeam} = props.team;
    return (
        <div className="col-md-4 mt-5 text-center">
            <div className="teams">
            <img src={strTeamBadge} alt=""/>
            <h3>{strTeam}</h3>
            <p>{strLeague}</p>
            <Link to={`/team/${idTeam}`}><button className="btn btn-info">Explore</button></Link>
            </div>
        </div>
    );
};

export default Teams;