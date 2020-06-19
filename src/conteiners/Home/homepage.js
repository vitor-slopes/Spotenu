import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import { Button, Tabs, Tab, AppBar } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Header from "../../Components/Header"
import BandApproval from '../../Components/BandApproval';
import ManageGenre from '../../Components/ManageGenre';
import AdminApprove from '../../Components/AdminApprove';

const GlobalWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #8888;
  height: auto;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;

  Header {
    height: 7vh;
    min-height: 50px;
  }
  `

const LeftGrid = styled.div`
  height: 93vh;
  width: 100%;
  background-color: #9c9c9c;

  div {
  text-align: center
  }  
  Button {
    width: 100%;
    margin: 8px 0;
  }
`
const RightGrid = styled.div`
  height: 93vh;
  width: 100%;
`
const FilterBarWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: space-around;
  padding: 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

`

export default function HomePage() {

  const userStore = useSelector((state) => state.header.admin)
  const [menuButtonText, setMenuButtonText] = useState({})
  const [rightGrid, setRightGrid] = useState("Selecione uma opção")
  const [value, setValue] = React.useState(undefined)


  useEffect(() => {
    switch (userStore) {
      case "vipUser":
        setMenuButtonText({
          button1: 'Busca de música',
          button2: 'playlist',
          button3: 'vipUser botão 3',
          button4: 'vipUser botão 4',
          button5: 'vipUser botão 5',
          button6: 'vipUser botão 6'
        })
        break;
      case "admin":
        setMenuButtonText({
          button1: 'aprovar bandas',
          button2: 'gerenciar gêneros',
          button3: 'adicionar admin'
        })
        break;
      case "band":
        setMenuButtonText({
          button1: 'band botão 1',
          button2: 'band botão 2',
          button3: 'band botão 3',
          button4: 'band botão 4',
          button5: 'band botão 5',
          button6: 'band botão 6',
        })
        break;
      default:
        setMenuButtonText({
          button1: 'freeUser botão 1',
          button2: 'freeUser botão 2',
          button3: 'freeUser botão 3',
          button4: 'freeUser botão 4',
          button5: 'freeUser botão 5',
          button6: 'freeUser botão 6'
        })
        break;
    }
  }, [])

  function button1(value) {
    if (value === "oi") {
      console.log("oi")
    }
    switch (userStore) {
      case "vipUser":
        setRightGrid(<BandApproval />)
        setValue(0)
        break;
      case "admin":
        setRightGrid(<BandApproval />)
        setValue(0)
        break;
      default:
        break;
    }
  }

  function button2() {
    switch (userStore) {
      case "vipUser":
        setRightGrid(<BandApproval />)
        break;
      case "admin":
        setRightGrid(<ManageGenre />)
        setValue(1)
        break;
      default:
        break;
    }
  }

  function button3() {
    switch (userStore) {
      case "vipUser":
        setRightGrid(<BandApproval />)
        break;
      case "admin":
        setRightGrid(<AdminApprove />)
        setValue(2)
        break;
      default:
        break;
    }
  }


  return (
    <GlobalWrapper>
      <Header />
      <Grid container spacing={12}>
        <Grid item justify="center" md={2} sm={3}>
          <Hidden xsDown>
            <LeftGrid>
              <Button onClick={button1} variant="contained" color="primary">{menuButtonText.button1}</Button>
              <Button onClick={button2} variant="contained" color="primary">{menuButtonText.button2}</Button>
              <Button onClick={button3} variant="contained" color="primary">{menuButtonText.button3}</Button>
              {menuButtonText.button4 ? <Button variant="contained" color="primary">{menuButtonText.button4}</Button> : ''}
              {menuButtonText.button5 ? <Button variant="contained" color="primary">{menuButtonText.button5}</Button> : ''}
              {menuButtonText.button6 ? <Button variant="contained" color="primary">{menuButtonText.button6}</Button> : ''}
            </LeftGrid>
          </Hidden>
        </Grid>
        <Grid item md={10} sm={9} xs={12}>
          <RightGrid>
            <Hidden smUp>
              <FilterBarWrapper>
                <AppBar position="sticky" color="secondary">
                  <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    <Tab key={0} onClick={button1} label={menuButtonText.button1} />
                    <Tab key={1} onClick={button2} label={menuButtonText.button2} />
                    <Tab key={2} onClick={button3} label={menuButtonText.button3} />
                    {menuButtonText.button4 && <Tab label={menuButtonText.button4} />}
                    {menuButtonText.button5 && <Tab label={menuButtonText.button5} />}
                  </Tabs>
                </AppBar>
              </FilterBarWrapper>
            </Hidden>

            <Content>
              {rightGrid}
            </Content>
          </RightGrid>
        </Grid>
      </Grid>

    </GlobalWrapper >
  )
}
