import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';

const Teams = (props) => {
    const {strTeam, strTeamBadge, strSport, idTeam} = props.team;
    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mt-5 text-center">
            <div className="teams">
                <img src={strTeamBadge} alt=""/>
                <h3>{strTeam}</h3>
                <p>Sports Type: {strSport}</p>
                <Link to={`/team/${idTeam}`}><button className="btn btn-info">Explore</button></Link>
            </div>
        </div>
    );
};

export default Teams;