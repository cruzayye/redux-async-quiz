import React from 'react';
import PropTypes from 'prop-types';

// export default class Image extends PureComponent {
//   static propTypes = {
//     img: PropTypes.string.isRequired
//   }
//   render() {
//     const { img } = this.props;
//     return (
//       <img src={img}/>
//     );
        
//   }
// }

export default function Image({ img, onClick }) {
  return (
    <>
    <img src={img} />
    <button onClick={onClick}>new image</button>
    </>
  );
}

Image.propTypes = {
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
