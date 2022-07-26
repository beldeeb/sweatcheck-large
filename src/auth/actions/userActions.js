import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {sessionService} from 'redux-react-session';

//the remote endpoint and local
const remoteUrl = "https://sweatcheck.herokuapp.com/";
const localUrl = "http://localhost:5000/";
const currentUrl = remoteUrl;

export const loginUser = (
    values, 
    history, 
    setFieldError, 
    setSubmitting
    ) => {
    //make checks and get some data

    return () => {

    axios.post(
        currentUrl+"api/user/signin", 
    values,
    {
        headers: {
            "Content-Type": "application/json"
        }
    } 
    ).then((response) => {
        const {data} = response;

        if (data.status === "FAILED") {
            const {message} = data;

            //check for specific error
            if (message.includes("values")) {
                setFieldError("login", message);
                setFieldError("password", message);
            } else if (message.includes("password")) {
                setFieldError("password", message);
            }
            else if (message.toLowerCase().includes("values")) {
                setFieldError("values", message);
            }    

        } else if (data.status === "SUCCESS") {
            const userData = data.data;

            const token = userData.token;

            sessionService
                .saveSession(token)
                .then(() => {
                    sessionService
                        .saveUser(userData)
                        .then(() => {
                            history("/landing");
                })
                .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
        }

        //complete submission
        setSubmitting(false);
    })
    .catch(err => console.error(err));
    }
};

export const signupUser = (values, history, setFieldError, setSubmitting) => {
    
        return (dispatch) => {
    axios
        .post(
            currentUrl+"api/user/signup", 
            values,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            } 
    )
    .then((response) => {
        const {data} = response;

        if (data.status === "FAILED") {
            const {message} = data;

            //checking for specific error
            if (message.includes("firstName")) {
                setFieldError("firstName", message);
            } else if (message.includes("lastName")) {
                    setFieldError("lastName", message);   
            } else if (message.includes("values")) {
                    setFieldError("values", message);                                 
            } else if (message.includes("login")) {
                setFieldError("login", message);
            } else if (message.includes("password")) {
                setFieldError("password", message);
            }

        //pending until values verification
        } else if (data.status === "PENDING") {
            // display message for values verification
           // const { values } = values;
            //history('/valuessent/${values}');       
            history("/emailsent");       

        }

         //complete submission
         setSubmitting(false);
    })
    .catch(err => console.error(err));

}
};

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        history('/');
    }  
};

export const forgottenPassword =  (
    values, 
    history, 
    setFieldError, 
    setSubmitting
    ) => {
    //make checks and get some data

       
        const email = values.login
        
        axios.post(
        
        currentUrl+"api/user/requestPasswordReset", {email}
      /*  ,{
        headers: {
            "Content-Type": "application/json"
        }
    } */
    
    ).then((response) => {
        const {data} = response;

        if (data.status === "FAILED") {
        
            const {message} = data;

            //check for specific error
            if (
                message.toLowerCase().includes("user") || 
                message.toLowerCase().includes("password") ||
                message.toLowerCase().includes("values") //Should be email?
                ) {
                 setFieldError("values", message); //Should be email?
                }
        } else if (data.status === "PENDING") {
          const {login, password} = values;
          history("/EmailSent2");
        }
        
        //complete submission
        setSubmitting(false);
    })
    .catch(err => console.error(err));
    
    }


//Actualy reset
export const resetPassword = async(
    values, 
    history, 
    setFieldError, 
    setSubmitting
    ) => {
    //make checks and get some data

    // return () => {
        
        console.log(values)
        console.log(values.newPassword)
        let { userId, resetString} = values
        console.log(userId)
      // const userId = "62def835cb22f3308e29f502"
        await
    axios
    .post(currentUrl+ `api/user/resetPassword/${userId}/${resetString}`, {newPassword:values.newPassword} )
    .then((response) => {
        const {data} = response;
         console.log(data.status)
         console.log(data.message)
        if (data.status === "FAILED") {
            const {message} = data;

            //check for specific error
            if (
                message.toLowerCase().includes("password")
                 ) {
                setFieldError("newPassword", message);
            }         
        } else  {
          history("/ResetConfirmation"); //Switch?
        }
    
        //complete submission
        setSubmitting(false);
    })
    .catch(err => console.error(err));
    }
