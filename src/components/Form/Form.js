import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Watermark,TextField,Label,Button} from './components';
import {isFormValid, fetchDataAndHandleResponse} from './utils';

const Wrapper = styled.div`
  display:flex;
  align-items:center;
`;

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textFieldValue: '',
            errorMessage : {
                active: false,
                text: ''
            },
        };
    }  
    submitForm = () => {
        const {textFieldValue} = this.state;
        const {setTableData,clearTableData,toggleLoaderDisplay,toggleErrorMessageDisplay} = this.props;
        clearTableData();
        if(isFormValid(textFieldValue)) {
            fetchDataAndHandleResponse(setTableData, toggleLoaderDisplay, toggleErrorMessageDisplay, textFieldValue);
        } else {
            this.showErrorMessage();
        }
    }
    onTextFieldChange = (e) => {
        const {value} = e.target;
        this.setState({textFieldValue:value});
    }       
    showErrorMessage = () => {
        const text = 'Tester name should be 2-12 characters';
        this.setState({
            errorMessage: {...this.state.errorMessage, active:true, text }
        });
    }
    clearErrorMessage = () => {
        const {toggleErrorMessageDisplay} = this.props;
        toggleErrorMessageDisplay(false);
        this.setState({
            errorMessage: {...this.state.errorMessage, active:false, text: ''}
        });
    }  
    render() {
        const {textFieldValue, errorMessage} = this.state;
        return (
            <Wrapper>
                <Label>Tester name</Label>
                <Watermark text={"Enter the tester name"} />              
                <TextField value={textFieldValue} onChange={this.onTextFieldChange} onFocus={this.clearErrorMessage} errorMessage={errorMessage} />
                <Button onClick={this.submitForm}>Fetch</Button>
            </Wrapper>
        )
    }
}

Form.propTypes = {
    setTableData : PropTypes.func,
    clearTableData : PropTypes.func
};


export default Form;