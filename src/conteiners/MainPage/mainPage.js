import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"

const GlobalWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #888;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`

class mainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    
  }


  render() {
    return (
      <GlobalWrapper>
        <p>oieee</p>
      </GlobalWrapper >
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {

  };
}
function mapStateToProps(state) {
  return {

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(mainPage);