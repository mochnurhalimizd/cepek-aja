import React from 'react';
import PropTypes from 'prop-types';

class ImageComponent extends React.Component {
    render() {
        const { src, title, alt } = this.props;
        return <img src={src} alt={alt} title={title} />;
    }
}

ImageComponent.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    alt: PropTypes.string
};

ImageComponent.defaultProps = {
    src:
        'https://images.unsplash.com/photo-1542834281-0e5abcbdc5b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Cepek aja lah bray',
    alt: 'Cepek aja lah bray'
};

export default ImageComponent;
