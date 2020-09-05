import React from 'react';
import '../App.css';
import appIcon from '../images/app-icon.svg';

function About(){
    return (
        <div className="about-content">
            <div className="about-img">
                <img src={appIcon} alt="tmdb-logo" />
            </div> 
            <div className="about-info">  
                <p><b>This product uses the TMDb API but is not endorsed or certified by TMDb.</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus vestibulum libero, eu hendrerit ante hendrerit rutrum. Mauris rhoncus orci nec tortor aliquet faucibus sit amet vel nisi. Donec luctus nisl a pretium facilisis. Suspendisse id nunc ac dui sagittis fermentum. Maecenas purus arcu, porttitor et fermentum sit amet, tempus non sapien. </p>
            </div>     
        </div>
    );
}



export default About;