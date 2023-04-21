import css from 'dom-css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars-2';

class CustomScrollbar extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            scrollTop: 0,
            scrollHeight: 0,
            clientHeight: 0
        };
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(values) {
        const { shadowTop } = this.refs;
        const { scrollTop } = values;
        const shadowTopOpacity = 1 / 20 * Math.min(scrollTop, 20);
        css(shadowTop, { opacity: shadowTopOpacity });
    }

    render() {
        const { style, ...props } = this.props;
        const containerStyle = {
            ...style,
            position: 'relative'
        };
        const shadowTopStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)'
        };

        return (
            <div style={containerStyle}>
                <Scrollbars
                    ref="scrollbars"
                    onUpdate={this.handleUpdate}
                    {...props} />
                <div
                    ref="shadowTop"
                    style={shadowTopStyle} />
            </div>
        );
    }
}

CustomScrollbar.propTypes = {
    style: PropTypes.object
};

export default CustomScrollbar;