import React from 'react';
import PropTypes from 'prop-types';
import './buttons.scss';

class ButtonsComponent extends React.Component {
    getClassName() {
        const { type, className } = this.props;
        const response = {
            'cp-btn': true,
            [`cp-btn--${type}`]: true
        };

        const name = Object.keys(response)
            .filter((x) => response[x])
            .join(' ');

        return `${name} ${className}`;
    }

    render() {
        const { children, href } = this.props;
        return (
            <a href={href} className={this.getClassName()}>{children}</a>
        );
    }
}

ButtonsComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
    href: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};

ButtonsComponent.defaultProps = {
    children: null,
    href: '/',
    type: PropTypes.string,
    className: ''
};

export default ButtonsComponent;
