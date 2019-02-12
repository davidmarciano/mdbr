import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left:10px;
  display:flex;
  align-items:center;
  justify-content:center;  
  position:relative;
  cursor:default;
`;
const QuestionMark = styled.div`
  width:20px;
  height:20px;  
  background-color:#cecece;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:bold;  
`;
const Tooltip = styled.div`
  display:${({show}) => show ? 'block' : 'none'};
  min-width:140px;
  padding:7px;
  background-color:#000000;
  color:#ffffff;
  font-size:14px;
  border-radius:5px;
  position:absolute;
  left:-4px;
  top:32px;
  z-index:2;
  text-align:center;
  &::after {
    content: '';
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 7px solid #000000;
    position: absolute;
    left: 8px;
    top: -6px;
  }
`;

class WaterMark extends React.Component {
    constructor() {
        super();
        this.state = {
            isShown: false,
        }
    }
    toggleTooltipDisplay = (bool) => {
        this.setState({isShown:bool});
    }
    render() {
        const {text} = this.props;
        const {isShown} = this.state;
        return (
            <Wrapper onMouseOver={() => this.toggleTooltipDisplay(true)} onMouseLeave={() => this.toggleTooltipDisplay(false)}>
                <QuestionMark>?</QuestionMark>
                <Tooltip show={isShown}>{text}</Tooltip>            
            </Wrapper>
        )
    }
}

WaterMark.propTypes = {
  text : PropTypes.string,
};

export default WaterMark;