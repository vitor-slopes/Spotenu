import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"
import { Paper, Button } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography'
import Header from "../../Components/Header"

const GlobalWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #8888;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  Header {
    height: 7vh;
  }
  `

const DivEsquerda = styled.div`
  height: 93vh;
  width: 100%;
  border: 3px solid red;

  div {
  text-align: center
  }  
  Button {
    width: 100%;
    margin: 10px 0;
  }
`
const DivDireita = styled.div`
  height: 93vh;
  width: 100%;
  border: 3px solid red;
`


class mainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <GlobalWrapper>
        <Header />
        <Grid container spacing={12}>
          <Grid item justify="center" md={2} sm={3}>
            <Hidden xsDown>
              <DivEsquerda>
                <Button variant="contained" color="primary">aaa</Button>
                <Button variant="contained" color="primary">aaa</Button>
                <Button variant="contained" color="primary">aaa</Button>
                <Button variant="contained" color="primary">aaa</Button>
                <Button variant="contained" color="primary">aaa</Button>
              </DivEsquerda>
            </Hidden>
          </Grid>
          <Grid item md={10} sm={9} xs={12}>
            <DivDireita>
              <Grid>
                gridRight
              </Grid>
            </DivDireita>
          </Grid>
        </Grid>

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