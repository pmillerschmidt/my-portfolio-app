import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';


const Socials = () => { 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleResize = () => {setWindowWidth(window.innerWidth);};
        window.addEventListener("resize", handleResize);
        return () => {window.removeEventListener("resize", handleResize);};
    }, []);

    return (
        <div class="mastfoot">
            <div class="inner">
            {windowWidth >= 1000 ? (
            
                <p>
                    <SocialIcon target="_blank" class="icon" url="https://www.linkedin.com/in/paul-miller-schmidt/" />    <SocialIcon target="_blank" class="icon" url="https://github.com/paulmillerschmidt" />
                </p>
                
            ) : (<div></div>)}
            </div>
        </div>
    );
};

export default Socials;
        
         
