import React, { Component } from 'react'
// import { PropTypes } from 'prop-types';
class AnchorButton extends Component {
    static defaultProps = {
        target : "_blank"
    }
    render() {
        const { text, href, type } = this.props;
        return (
            <a href={href} target={this.props.target} className={`btn btn-sm btn-${type}`}>{text}</a>
        )
    }
}



export default AnchorButton;