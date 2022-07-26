import {StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup} from "./../components/Styles";
import React from 'react';

//logo
import Logo from "./../assets/logo.png";

const Home = () => {
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start"
            }}>
                <Avatar image={Logo} />
            </div>
            <StyledTitle size={65}>Welcome to Sweat Check</StyledTitle>
            <StyledSubTitle size={27}>Feel free to explore our page</StyledSubTitle>           

            <ButtonGroup>
            <StyledButton to="/login">Login</StyledButton>
            <StyledButton to="/signup">Signup</StyledButton>
            </ButtonGroup>
        </div>
    );
}

export default Home;