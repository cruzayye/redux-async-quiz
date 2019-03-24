import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Image from '../components/Image.js';
import { getImage } from '../actions/ImageAction';
import { selectImage } from '../selectors/imageSelector';
import PropTypes from 'prop-types';

class DogImage extends PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired,
    fetch: PropTypes.func
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { img } = this.props;
    return (
      <Image 
        img={img} 
        onClick={this.props.fetch}/>
    );
  }
}

const mapStateToProps = state => ({
  img: selectImage(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getImage());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogImage);
