import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';


class Mastfoot extends Component {
    state = {  } 
    render() { 
        return (
            <div class="mastfoot">
            <div class="inner">
              <p><SocialIcon class="icon" url="https://www.linkedin.com/in/paul-miller-schmidt/" />    <SocialIcon class="icon" url="https://github.com/paulmillerschmidt" /></p>
            </div>
            </div>
        );
    }
}
 
export default Mastfoot;