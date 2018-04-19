import React from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../actions';

import TextField from 'material-ui/TextField';

class AddTodo extends React.PureComponent {
    state = {
        inputText: ''
    }

    changeInput = (e, inputText) => {
        this.setState({inputText});
    }

    formSubmit = e => {
        e.preventDefault();

        const {inputText} = this.state,
            {dispatch} = this.props;

        if (!inputText.trim()) {
            return ;
        }

        dispatch(addTodo(inputText));

        this.setState({inputText: ''});
    }

    render() {
        const {inputText} = this.state;

        return <form onSubmit={this.formSubmit} className='add-todo'>
            <TextField
                className='add-todo__text'
                value={inputText}
                onChange={this.changeInput}
                floatingLabelFixed={false}
                floatingLabelText='Enter task text'/>
        </form>;
    }
}
 
export default connect()(AddTodo);
