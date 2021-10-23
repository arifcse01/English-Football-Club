import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
    const {strTeam, strTeamBadge, strSport, idTeam} = props.team;
    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mt-5 text-center pb-5">
            <div className="teams">
                <img src={strTeamBadge} alt=""/>
                <h3>{strTeam}</h3>
                <p>Sports Type: {strSport}</p>
                <Link to={`/team/${idTeam}`}><button className="btn btn-info p-2">Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>
            </div>
        </div>
    );
};

export default Teams;