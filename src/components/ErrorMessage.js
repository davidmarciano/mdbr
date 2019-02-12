import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
    color:red;
`;

const ErrorMessage = ({text}) => <Text>{text}</Text>;

export default ErrorMessage;