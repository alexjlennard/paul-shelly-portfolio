import React, { Component } from 'react';
import './PageWrapper.scss';
import PropTypes from 'prop-types';

class PageWrapperContainer extends Component {
    render() {
        return <div className={'page-wrapper'}>{this.props.children}</div>;
    }
}

PageWrapperContainer.propTypes = {
    children: PropTypes.any.isRequired,
};

export default PageWrapperContainer;
