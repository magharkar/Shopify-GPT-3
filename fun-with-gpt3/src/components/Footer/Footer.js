import React from "react";
import { FooterWrapper, Content, DevelopedBy, LeftContent, RightContent } from "./Footer.style";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { DEVELOPEDBY } from "../../constants";

const Footer = () => {
    return (
        <FooterWrapper>
            <Content>
                <LeftContent>
                    <DevelopedBy>{DEVELOPEDBY}</DevelopedBy>
                </LeftContent>
                <RightContent>
                    <LinkedInIcon 
                        fontSize="large" 
                        onClick={() => {window.open("https://www.linkedin.com/in/mugdha-agharkar/","_blank")}} 
                        style={{cursor: "pointer"}}
                    />
                    <GitHubIcon fontSize="large" 
                        onClick={() => {window.open("https://github.com/mugdha7197","_blank")}} 
                        style={{cursor: "pointer"}}
                    />
                </RightContent>
            </Content>
        </FooterWrapper>
    )
}

export default Footer;