import React from 'react';
import VickyImg from '../Team/Images/Vicky.jpg';
import AaronImg from '../Team/Images/Aaron.jpg';
import ElenaImg from '../Team/Images/Elena.jpg';
import './Team.css'
import TeamMember from '../../TeamMember/TeamMember';


export default function Team() {
    return (
        <div className="Team" id="Team">
            <h3>The</h3>
            <h2>Team</h2>
            <div className="row">
                <TeamMember
                    name="Vicky Vasilopoulou"
                    teamImage={VickyImg}
                    github="https://github.com/Viki-Robles"
                    linkedIn="https://www.linkedin.com/in/vicky-vasilopoulou-52230111b/"
                    email="vasiliki.robles@gmail.com"
                />
                <TeamMember
                    name="Aaron Hawthorne"
                    teamImage={AaronImg}
                    github="https://github.com/Awthor"
                    linkedIn="https://www.linkedin.com/in/aaronhawthorneproptech/"
                    email="aaronhawthorne12345@gmail.com"
                />
                <TeamMember
                    name="Elena Sacristan"
                    teamImage={ElenaImg}
                    github="https://github.com/elenasacristan"
                    linkedIn="https://www.linkedin.com/in/elena-sacristan-sacristan/"
                    email="elena_sacristan@yahoo.com"
                />
            </div>
        </div>
    )
}
