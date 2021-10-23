import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import facebook from '../../icons/Facebook.png';
import twitter from '../../icons/Twitter.png';
import youtube from '../../icons/YouTube.png';
import maleImage from '../../image/male.png';
import femaleImage from '../../image/female.png';

const TeamDetails = () => {
    const {teamId} = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    const {strTeamBadge, strCountry, strGender, strTeamBanner, strAlternate, strSport, strLeague, strDescriptionEN, strDescriptionES, strFacebook, strYoutube, strTwitter} = teamDetails;
    
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]))
    },[teamId]);

    const { pathname } = useLocation();    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);    

    const teamLogo ={
        width: "150px",
        margin: "70px auto"
    }

    const teamInfo = {
        textAlign: "start",
        background: "blue",
        border: "1px solid blue",
        borderRadius: "10px",
        paddingLeft: "20px",
        color: "#f5f5f5af",
        fontSize: "20px",
        margin: "auto 5px"
    }

    const icons = {
        width: '40px',
        marginRight: '15px',
        paddingBottom: '20px'    
    }

    const banner = {
        backgroundImage: `url(${strTeamBanner})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    
    return (
        <div>            
            <div style={banner}>
                <img style={teamLogo} src={strTeamBadge} alt=""/>
            </div>
            <div className="container">
                <div style={teamInfo} className="row mt-3">
                    <div className="col-12 col-md-7 col-sm-12  pt-3 mt-sm-3 mt-md-4 ">
                        <h2 style={{fontSize:"40px"}}> {strAlternate}</h2>
                        <p>Country : {strCountry}</p>
                        <p>Sports Type : {strSport}</p>
                        <p>{strLeague}</p>
                        <p>Gender : {strGender}</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 mt-md-4 mt-4">
                        {
                            strGender ? <img className="w-100 mb-3 " src={maleImage} alt=""/> : <img className="w-100 mb-3 " src={femaleImage} alt=""/>
                        }
                    </div>                    
                </div>

                <div style={{padding:"15px 0", textAlign:"justify", color:"#f5f5f5af"}}>
                    <p>{strDescriptionEN}</p>
                    <br/>
                    <p>{strDescriptionES}</p>
                </div>

                <div className="text-center">
                    <span><a href={"https://" + strFacebook} target="_blank"><img style={icons} src={facebook} alt=""/></a></span>
                    <span><a href={"https://" + strTwitter} target="_blank"><img style={icons} src={twitter} alt=""/></a></span>   
                    <span><a href={"https://" + strYoutube} target="_blank"><img style={icons} src={youtube} alt=""/></a></span>                                  
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;