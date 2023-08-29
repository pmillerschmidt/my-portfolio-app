import React from 'react';
import "../styles/BootstrapCard.css";

class BootstrapCard extends React.Component {
  



  render() {
    const {imageUrl} = this.props;
    const divStyle = {
        backgroundImage: `url(${imageUrl})`,
      };

    return (


        <div class="card-main">
        
        <img src={imageUrl} alt="Your Image" className="image" loading="lazy"/>
        <h1 class="front-title">{this.props.title}</h1>
        <div className="text">
            <h5 class="title">{this.props.title}</h5>
            <p className="info">{this.props.info}</p>
            <button type="button" className="btn btn3">
                <a href={this.props.link}>Learn More</a>
            </button>
       </div>
       </div>

          
  );
  

    }
}

export default BootstrapCard;
