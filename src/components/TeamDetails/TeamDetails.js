import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import facebook from '../../icons/Facebook.png';
import tweeter from '../../icons/Twitter.png';
import youtube from '../../icons/YouTube.png';
import maleImage from '../../image/male.png';
import femaleImage from '../../image/female.png';
import { Link } from 'react-router-dom';

const TeamDetails = (props) => {
    const {teamId} = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    const {strTeam, strTeamBadge, strCountry, strGender, strSport, strLeague, strFacebook, strYoutube, strTwitter} = teamDetails;
    // console.log(team);
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]))
    },[teamId]);

    const teamLogo ={
        width: "150px",
        marginTop: "100px",
        marginBottom: "75px",
    }

    const teamInfo = {
        textAlign: "start",
        background: "blue",
        border: "1px solid blue",
        borderRadius: "10px",
        paddingLeft: "20px",
        color: "#f5f5f5af",
        fontSize: "20px"
    }

    const icons = {
        width: '70px',        
        margin: '20px 10px'
    }
    
    return (
        <div>            
            <div className="banner">
                <img style={teamLogo} src={strTeamBadge} alt=""/>
            </div>
            <div className="container">
                <div style={teamInfo} className="row mt-4 pt-4 pb-3">
                    <div className="col-md-7 col-sm pt-3">
                        <h2 style={{fontSize:"40px"}}> {strTeam}</h2>
                        <p>Country : {strCountry}</p>
                        <p>Sport Type : {strSport}</p>
                        <p>{strLeague}</p>
                        <p>Gender : {strGender}</p>
                    </div>
                    <div className="col-md-5 col-sm">
                        {
                            strGender ? <img className="w-100 mb-3 " src={maleImage} alt=""/> : <img className="w-100 mb-3 " src={femaleImage} alt=""/>
                        }
                    </div>                    
                </div>

                <div style={{padding:"15px 0", textAlign:"justify", color:"#f5f5f5af"}}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum nulla natus vitae repellat quasi quos numquam accusantium. Quisquam sed libero veritatis? Minus, architecto earum iure saepe dolorem provident quae, reprehenderit est tempora ratione consequuntur et nulla. Amet explicabo, nostrum velit sint omnis fuga laborum expedita libero, pariatur magnam quia sapiente impedit harum. Qui laudantium aliquid debitis nam obcaecati totam quisquam explicabo illum accusamus vero ex libero ab nobis perferendis eos magnam facere, voluptatibus velit culpa.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cupiditate. Incidunt expedita error laboriosam. Quibusdam aliquid tempore excepturi? Tenetur nam, doloribus ipsa quae sunt consequatur esse saepe fuga maxime? Aperiam aspernatur perferendis iure quam laudantium eius nisi veritatis id deleniti.</p>
                </div>

                <div>
                    <span><a href={"https://" + strFacebook}><img style={icons} src={facebook} alt=""/></a></span>
                    <span><a href={"https://" + strTwitter}><img style={icons} src={tweeter} alt=""/></a></span>   
                    <span><a href={"https://" + strYoutube}><img style={icons} src={youtube} alt=""/></a></span>                                    
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;