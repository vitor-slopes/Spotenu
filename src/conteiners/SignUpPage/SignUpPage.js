import React, { useState, useEffect } from 'react'
import {
  Container,
  Paper, Button,
  TextField,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import { routes } from '../Router/router'
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
    min-height: 500px;
    max-height: 72vh;
    width: 400px;
    max-width: 80vw;
    min-width: 300px;
    padding: 0 16% 0 16%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    
  button {
    width: 100%;
    border-radius: 12px;
    margin-top: 16%;
  }
  p {
    margin: 16px 0 8% 0;
    font-size: 12px;
  }
  img {
    width: 70%;
    /* padding-bottom: 20%; */
  }
  @media (max-height: 500px) {
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

export default function SignUpPage() {
  return (
    <PageWrapper>
      <Container>
        <FormWrapper>
          <Paper elevation={12} >
            <InnerWrapper>
              <ImgWrapper>
                <img src="https://user-images.githubusercontent.com/56808066/85204477-1ce43d00-b2eb-11ea-9979-96df75da549c.png" alt="Spotenu Logo" />
              </ImgWrapper>
              <RadioGroup>
                <FormControlLabel value="Usuário" control={<Radio />} label="Usuário" />
                <FormControlLabel value="Banda/músico" control={<Radio />} label="Banda/músico" />
              </RadioGroup>
              <TextField label="Nome" fullWidth />
              <TextField label="Nickname" fullWidth />
              <TextField label="Email" fullWidth />
              <TextField
                label="Senha"
                // type="password"
                autoComplete="current-password"
                fullWidth
              />
              <Button variant="contained" color="primary" >cadastrar</Button>
              <p>Já é membro?<a href={routes.login}>Faça login</a></p>
            </InnerWrapper>
          </Paper>
        </FormWrapper>
      </Container>
    </PageWrapper>
  )
}