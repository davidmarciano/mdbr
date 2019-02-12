import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  position:relative;
  margin:0px 10px;  
`;
const Field = styled.input`
  border-radius:3px;
  border-width:1px;
  border-style:solid;
  border-color:${props => props.isErrorMessageActive ? 'red' : '#cecece'} ;
  padding:5px;
`;
const ErrorMessage = styled.div`
  color:red;
  position:absolute;
  bottom:-20px;
  width:250px;
`;

const TextField = ({errorMessage, ...rest}) => {
    return (
        <Wrapper>
            <Field type={"text"} {...rest} isErrorMessageActive={errorMessage.active} />
            {errorMessage.active && <ErrorMessage>{errorMessage.text}</ErrorMessage>}
        </Wrapper>
    )
};

TextField.propTypes = {
  rest : PropTypes.object,
  errorMessage : PropTypes.object
};

export default TextField;