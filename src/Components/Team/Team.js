import React, { Component } from 'react';
import VickyImg from '../Team/Images/Vicky.jpg';
import AaronImg from '../Team/Images/Aaron.jpg';
import ElenaImg from '../Team/Images/Elena.jpg';
import './Team.css'
import TeamMember from '../../TeamMember/TeamMember';

class Team extends Component {
    render() {
        return (
            <div className="Team">
                <h3>The</h3>
                <h2>Team</h2>
                <div className="row">
                    <TeamMember
                        name="Vicky Vasilopoulou"
                        teamImage={VickyImg}
                        linkedIn="https://www.linkedin.com/in/vicky-vasilopoulou-52230111b/"/>
                    <TeamMember
                        name="Aaron Hawthorne"
                        teamImage={AaronImg} 
                        linkedIn="https://www.linkedin.com/in/aaronhawthorneproptech/"/>
                    <TeamMember
                        name="Elena Sacristan"
                        teamImage={ElenaImg}
                        linkedIn="https://www.linkedin.com/in/elena-sacristan-sacristan/"/>
                </div>
            </div>
        )
    }
}
export default Team;

