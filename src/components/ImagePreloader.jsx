import React from 'react';

class ImagePreloader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageLoaded: false };
  }

  handleImageLoad = () => {
    this.setState({ imageLoaded: true });
  }

  componentDidMount() {
    const img = new Image();
    img.src = this.props.src;
    img.onload = this.handleImageLoad;
  }

  render() {
    return this.state.imageLoaded ? (
      <img src={this.props.src} alt={this.props.alt} />
    ) : null;
  }
}

export default ImagePreloader;
