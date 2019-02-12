import PropTypes from 'prop-types';
import styled from 'styled-components';

const Column = styled.div`
    width:25%;
    height:100%;
    padding:0px 15px;
    display:flex;
    align-items:center;
    border-right-style:solid;
    border-right-width:${props => props.isLast ? '0px' : '1px'};
    border-right-color:#000000;        
`;

Column.propTypes = {
    isLast : PropTypes.bool,
};

export default Column;