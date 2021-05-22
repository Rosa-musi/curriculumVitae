import React from 'react';
import Social from './Social'
import styled from 'styled-components'

const AboutStyle = styled.div`
    text-align: center;
`
const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`
const AboutImg = styled.img`
    object-fit: cover;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    border: 2px solid #E91E63;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`
const AboutName = styled.div`
    text-align: center;
`
const AboutH2 = styled.h2`
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   letter-spacing: 1.2px;
   margin: .5em 0 0 0;
   color: #C2185B;
`

const About = ({ avatar, name, profession, bio, address })=> (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt="" />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>{name}</AboutH2>
            </AboutName>
            <div className="About-profession">
                <p>{profession}</p>
            </div>
            <div className="About-desc">
                <p>{bio}</p>
            </div>
            <div className="About-location">
                <p>{address}</p>
            </div>
            <div className="About-social">
                <Social/>
            </div>
        </div>
    </AboutStyle>
)

export default About;