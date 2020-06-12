import React from 'react';
import VickyImg from '../Team/Images/Vicky.jpg';
import AaronImg from '../Team/Images/Aaron.jpg';
import ElenaImg from '../Team/Images/Elena.jpg';
import './Team.css'
import TeamMember from '../../TeamMember/TeamMember';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Team() {
        return (
            <div className="Team" id="Team">
                <h3>The</h3>
                <h2>Team</h2>
                <div className="row">
                    <TeamMember
                        name="Vicky Vasilopoulou"
                        teamImage={VickyImg} 
                        linkedIn="https://www.linkedin.com/in/vicky-vasilopoulou-52230111b/" />
                    <FaLinkedin className="LinkedIN"/>
                    <FaGithub className="Github" />
                    <TeamMember
                    
                        name="Aaron Hawthorne"
                        teamImage={AaronImg} 
                        linkedIn="https://www.linkedin.com/in/aaronhawthorneproptech/" />
                    <FaLinkedin className="LinkedIN" />
                    <FaGithub className="Github" />
                    <TeamMember
                    
                        name="Elena Sacristan"
                        teamImage={ElenaImg}
                        linkedIn="https://www.linkedin.com/in/elena-sacristan-sacristan/"/>
                    <FaLinkedin className="LinkedIN" />
                    <FaGithub className="Github" />
                </div>
            </div>
        )
    }


