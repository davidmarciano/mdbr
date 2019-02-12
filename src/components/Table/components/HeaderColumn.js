import PropTypes from 'prop-types';
import styled from 'styled-components';
import Column from './Column';

const HeaderColumn = styled(Column)`
    background-color:#eeeeee;
    cursor:${props => props.isClickable ? 'pointer' : 'default'};
    &:hover {
        background-color:${props => props.isClickable ? '#cecece' : '#eeeeee'};
    }
`;

HeaderColumn.propTypes = {
    isClickable : PropTypes.bool,
};

export default HeaderColumn;