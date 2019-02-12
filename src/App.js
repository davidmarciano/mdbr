import React from 'react';
import styled from 'styled-components';
import {Title, Form, Table, Loader, ErrorMessage} from './components';

const Wrapper = styled.div`
  height:100%;
  padding:10px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData : [],
      isLoading : false,
      errorMessage : {
        isActive : false,
        text: ""
      }
    }
  };
  
  setTableData = (tableData) => {
    this.setState({tableData});
  }

  clearTableData = () => {
    this.setState({tableData:[]});
  }

  toggleLoaderDisplay = (isLoading) => {
    this.setState({isLoading});
  }

  toggleErrorMessageDisplay = (isActive, message = "") => {
    this.setState((prevState) => ({
      errorMessage : {
        ...prevState.errorMessage,
        isActive,
        text:message
      }
    }));
  }

  render() {
    const {tableData, isLoading, errorMessage} = this.state;
    return (
      <Wrapper>
        <Title>Search bugs</Title>
        <Form setTableData={this.setTableData} clearTableData={this.clearTableData}
          toggleLoaderDisplay={this.toggleLoaderDisplay} toggleErrorMessageDisplay={this.toggleErrorMessageDisplay}
        />  
        {isLoading && <Loader />}
        {errorMessage.isActive && <ErrorMessage text={errorMessage.text} />}
        {tableData.length > 0 && <Table data={tableData} />}    
      </Wrapper>
    );
  }
}

export default App;
