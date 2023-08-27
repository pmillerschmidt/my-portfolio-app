import React, { Component } from 'react';
import '../styles/SubmitEmail.css'
import eg from '../static/images/rocket.gif';

class SubmitEmail extends Component {
    state = {  } 
    render() { 
        return (
            <section class="contact">
                <div>
                    <h1 className="submit-text">Submitted!</h1>
                    <img src={eg} alt='sent email' className='email-gif'></img>
                    <button className='btn btn-primary' onClick={() => window.location.reload(false)}>Send another</button>
                </div>
            </section>

        );
    }
}
 
export default SubmitEmail;