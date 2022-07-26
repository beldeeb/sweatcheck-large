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
import { resetPassword } from "./../auth/actions/userActions";
import {useNavigate, useParams } from "react-router-dom";
import ResetConfirmation from './ResetConfirmation';


const PasswordReset = ({resetPassword}) => {
        const history = useNavigate();
        const {userId, resetString } = useParams();
        console.log(userId)

    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>Password Reset</StyledTitle>
                <Formik
                    initialValues={{
                        newPassword: "",
                        confirmNewPassword: "",
                        userId,
                        resetString
                    }}
                    validationSchema={Yup.object({
                        newPassword: Yup.string()
                            .min(8, "Password is too short")
                            .max(30, "Password is too long")
                            .required("Required"),
                            confirmNewPassword: Yup.string()
                            .required("Required")
                            .oneOf([Yup.ref("newPassword")], "Passwords must match"),
                    })}
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        console.log(values);
                        resetPassword(values, history, setFieldError, setSubmitting);
                        history("/resetConfirmation")
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                           <TextInput
                                name="newPassword"
                                type="password"
                                label="New Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />
                            
                            <TextInput
                                name="confirmNewPassword"
                                type="password"
                                label="Confirm New Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />
                            <ButtonGroup>
                                {!isSubmitting && (
                                    <StyledFormButton type="submit">submit</StyledFormButton>
                                )}

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

export default connect(null, {resetPassword})(PasswordReset);