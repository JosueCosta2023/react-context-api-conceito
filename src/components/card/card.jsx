import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"

export const Card = () => {
    const { theme } = useContext(ThemeContext)
    return(
        <CardContainer style={{color: theme.color,
                    backgroundColor: theme.background,
                    border: theme.border}}>
            <h1>Meus links</h1>
            <CardLink 
                target='_blanck'
                href='https://www.linkedin.com/in/josue-ocanha-costa/' 
                style={{color: theme.color,backgroundColor: theme.background, border: theme.border}}>
                    Linkedin
            </CardLink>
            <CardLink 
                target='_blanck'
                href='https://www.facebook.com/JosueOcanhaCosta2023/' 
                style={{color: theme.color,backgroundColor: theme.background, border: theme.border}}>
                    Facebook
            </CardLink>
            <CardLink 
                target='_blanck'
                href='https://github.com/JosueCosta2023' 
                style={{color: theme.color,backgroundColor: theme.background, border: theme.border}}>
                    Github
            </CardLink>
            <CardLink 
                target='_blanck'
                href='https://josuecosta2023.github.io/PersonalQuest-josue-portifolioV1/' 
                style={{color: theme.color,backgroundColor: theme.background, border: theme.border}}>
                    Portfolio
            </CardLink>
            <h3>Josue Costa 2024</h3>
            <CardH1>Web-Developer</CardH1>
            <h3>React <i class="fa-brands fa-react"></i> Card</h3>

        </CardContainer>
    )
}

const CardContainer = styled.div`
    width:400px;
    height:600px;
    border-radius:10px;
    margin-top:20px;
    
`

const CardLink = styled.a`
    width:90%;
    height:60px;
    border-radius:5px; 
    text-align:center;
    display:block;
    margin:0 auto;
    line-height:60px;
    font-size:20px;
    margin-bottom:10px;
`

const CardH1 = styled.h1`
    font-size:35px;
`



