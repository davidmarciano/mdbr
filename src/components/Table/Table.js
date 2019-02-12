import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {sortBy} from './utils';
import {Header, Body, Row, Column, HeaderColumn} from './components';

const Wrapper = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  margin-top:20px;
  border:1px solid #000000;
`;

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedData: this.props.data
        };
    }  
    componentDidMount() {
        this.changeSort('firstName');
    }
    changeSort = (field) => {
        const {data} = this.props;
        const newSortedData = sortBy(data,field);
        this.setState({sortedData:newSortedData});
    }
    render() {
        const {sortedData} = this.state;
        const isClickable = sortedData.length > 1;
        return (
            <Wrapper>
                 <Header>
                     <Row>
                         <HeaderColumn isClickable={isClickable} onClick={() => this.changeSort('firstName')}>First name</HeaderColumn>
                         <HeaderColumn isClickable={isClickable} onClick={() => this.changeSort('lastName')}>Last Name</HeaderColumn>
                         <HeaderColumn isClickable={isClickable} onClick={() => this.changeSort('country')}>Country</HeaderColumn>
                         <HeaderColumn isLast>Bugs</HeaderColumn>
                     </Row>
                 </Header>
                <Body>
                    {sortedData.map(({firstName,lastName,country,bugs},index) => (
                        <Row key={index} isLast={index === sortedData.length-1}>
                            <Column>{firstName}</Column>
                            <Column>{lastName}</Column>
                            <Column>{country}</Column>
                            <Column isLast={true}>
                                {bugs.map((bug,index) => index === bugs.length-1 ? bug.title : bug.title + ",")}
                            </Column>
                        </Row>                        
                    ))}
                </Body>
            </Wrapper>
        )
    }
}

Table.propTypes = {
    data : PropTypes.arrayOf(PropTypes.object),
};

export default Table;