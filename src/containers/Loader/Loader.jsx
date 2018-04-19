import React from 'react';
import {connect} from 'react-redux';

import './Loader.css';

class Loader extends React.PureComponent {
    render() {
        return <div className={[
                'loader',
                !this.props.show &&'loader--hidden'
            ].filter(Boolean).join(' ')}/>;
    }
}

function mapStateToProps(state) {
    return {
        show: state.loader
    }
}

export default connect(mapStateToProps)(Loader);
