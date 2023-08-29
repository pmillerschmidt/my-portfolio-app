import React, { Component } from 'react';
import '../styles/SubmitEmail.css'
import eg from '../static/images/rocket.gif';

class SubmitEmail extends Component {
    state = {  } 
    render() { 
        return (
            <section class="sent">
                <div>
                    <h1 class='submit-text'>Your contact form has been submitted.</h1>
                    <p>Thank you for reaching out, I’ll be sure to reach back within 48 hours!</p>
                    <img src={eg} alt='sent email' className='email-gif'></img>
                    <button className='btn btn-primary' onClick={() => window.location.reload(false)}>Send another</button>
                </div>
            </section>

        );
    }
}
 
export default SubmitEmail;