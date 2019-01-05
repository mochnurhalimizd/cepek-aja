import React from 'react';
import PropTypes from 'prop-types';

class TextComponent extends React.Component {
    getClassName() {
        const { type } = this.props;
        const response = {
            'cp-button': true,
            [`cp-button--${type}`]: true
        };

        return Object.keys(response)
            .filter((x) => response[x] !== false)
            .join(' ');
    }

    render() {
        const { children } = this.props;

        return <p className={this.getClassName()}>{children}</p>;
    }
}

TextComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
    type: PropTypes.string
};

TextComponent.defaultProps = {
    children: null,
    type: 'p'
};

export default TextComponent;
