import React from 'react';

import {
    StyledTitle, 
    StyledSubTitle, 
    Avatar, 
    StyledButton, 
    ButtonGroup,
    StyledFormArea,
    colors,
    ExtraText
} from "../components/Styles";

//logo
import Logo from "./../assets/logo.png";

//React router
import { useNavigate, useParams} from 'react-router-dom';

const ResetConfirmation = ({}) => {
        const history = useNavigate();
        const {userEmail, reset } = useParams();
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
                
                    <StyledFormArea bg={colors.dark2}>
                        <StyledTitle size={65}>Password Reset</StyledTitle>
                        <ExtraText color={colors.light1}>
                            Your Password has been reset Successfully 
                            <b style= {{color: colors.primary}}>{userEmail}</b>
                        </ExtraText>
                        <ExtraText color={colors.light1}>
                        You may now login!
                            </ExtraText>
                            <ButtonGroup>
                                <StyledButton to={'/login'}>Login</StyledButton>
                            </ButtonGroup>
                    </StyledFormArea>

                

               
            
        </div>
    );
};

export default ResetConfirmation;