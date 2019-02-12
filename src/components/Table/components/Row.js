import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
    width:100%;
    height:50px;
    display:flex;
    border-bottom-style:solid;
    border-bottom-width:${props => props.isLast ? '0px' : '1px'};
    border-bottom-color:#000000;
`;

Row.propTypes = {
    isLast : PropTypes.bool,
};

export default Row;