import React from 'react'
import {
  Container,
  Paper, Button,
  TextField,
} from '@material-ui/core';
import {routes} from '../Router/router'
import styled from "styled-components"

const PageWrapper = styled.div`
height: 100vh;
width: 100vw;
background: url("https://user-images.githubusercontent.com/56808066/85162758-3ed0b780-b238-11ea-83cd-a11fb7997242.jpg") no-repeat center center ;
background-size: cover; 
display: flex;
justify-content: center;
align-items: center;
`
const FormWrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InnerWrapper = styled.div`
    height: 800px;
    min-height: 370px;
    max-height: 72vh;
    width: 400px;
    max-width: 80vw;
    min-width: 300px;
    padding: 0 16% 0 16%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    
  button {
    width: 100%;
    border-radius: 12px;
    margin-top: 16%;
  }
  p {
    margin: 16px 0 40% 0;
    font-size: 12px;
  }
  input {
    margin: 0 0 10px 0;
  }
  img {
    width: 70%;
    /* padding-bottom: 20%; */
  }
  @media (max-height: 650px) {
    p {
      margin: 8px 0 16% 0;
    }
    img {
      /* padding-bottom: 5%; */
    }
  }  
`
const ImgWrapper = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function LoginPage() {
  return (
    <PageWrapper>
      <Container>
        <FormWrapper>
          <Paper elevation={12} >
            <InnerWrapper>
              <ImgWrapper>
                <img src="https://user-images.githubusercontent.com/56808066/85204477-1ce43d00-b2eb-11ea-9979-96df75da549c.png" alt="Spotenu Logo" />
              </ImgWrapper>
              <TextField label="Email" fullWidth>ae</TextField >
              <br />
              <TextField
                id="standard-password-input"
                label="Password"
                // type="password"
                autoComplete="current-password"
                fullWidth
              />
              <Button variant="contained" color="primary" >entrar</Button>
              <p>Ainda não tem conta? <a href={routes.signIn}> Cadastre-se</a></p>
            </InnerWrapper>
          </Paper>
        </FormWrapper>
      </Container>
    </PageWrapper>
  )
}