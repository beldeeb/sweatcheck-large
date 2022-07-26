import React from 'react';
//styled components



import {
    StyledTextInput, 
    StyledFormArea, 
    StyledFormButton, 
    StyledLabel, 
    Avatar, 
    StyledTitle, 
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
    CopyrightText
} from './../components/Styles';

import Logo from './../assets/logo.png';

//formik
import {Formik, Form} from 'formik';
import {TextInput} from './../components/FormLib';
import * as Yup from 'yup';

//icons
import {FiMail, FiLock} from 'react-icons/fi';

//Loader
import {ThreeDots} from 'react-loader-spinner'

//auth & redux
import {connect} from 'react-redux';
import {forgottenPassword} from "./../auth/actions/userActions";
import {useNavigate, useParams } from "react-router-dom";
import {EmailSent2} from "./EmailSent2"

const ForgottenPass = ({forgottenpassword}) => {
        const history = useNavigate();
     //   const {userEmail} = useParams();

   
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                    Password Reset
                </StyledTitle>
                <Formik
                    initialValues={{
                        login: "",
                      //  redirectUrl: "https://sweatcheck.herokuapp.com/"
                    }}
                    validationSchema={Yup.object({
                        login: Yup.string()
//                          .email("Invalid email address")
                            .required("Required"),
                    })}
                    onSubmit={(values, {setSubmitting, setFieldError}) => { console.log(values)
                        forgottenPassword(values, history, setFieldError, setSubmitting);

                        
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                                name="login"
                                type="text"
                                label="Enter your email address"
                                placeholder="olga1@example.com"
                                icon={<FiMail />}
                            />
                            
                            <ButtonGroup>
                                 (
                                    <StyledFormButton type="submit" to="/EmailSent2">submit</StyledFormButton>
                                    
                               )

                                {isSubmitting && (
                                    <ThreeDots
                                        type="ThreeDots"
                                        color={colors.theme}
                                        height={49}
                                        width={100}
                                    />
                                )}
                                                                 
                            </ButtonGroup>
                        </Form>                    
                    )}
                </Formik>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2020
            </CopyrightText>
        </div>
    )
}

export default connect(null, {forgottenPassword})(ForgottenPass);