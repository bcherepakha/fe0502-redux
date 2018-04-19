import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../actions/actionsNewApp';

import './SearchForm.css';

class SearchForm extends React.PureComponent {
    changeInput = e => {
        const {onChangeHandler} = this.props,
            value = e.target.value;

        if (onChangeHandler) {
            onChangeHandler(value);
        }
    }

    submit = e => e.preventDefault()

    render() {
        const {search} = this.props;

        return <form className='search' onSubmit={this.submit}>
            <input
                value={search}
                type='text'
                name='search'
                className='search__input'
                onChange={this.changeInput}/>
            <button className='search__submit'>
                Search
            </button>
        </form>
    }
}

function mapStateToProps(state) {
    return {
        search: state.search
    }
}

function mapActionsToProps(dispatch) {
    return {
        onChangeHandler: value => dispatch(changeFilter(value))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SearchForm);
