import React from 'react';

import {
    StyledTitle, 
    StyledSubTitle, 
    Avatar, 
    StyledButton, 
    ButtonGroup,
    StyledFormArea,
    colors,
    topBanner, 
    TodoComponent,
    StyledSubTitleLanding,
    StyledTitleLanding,
    StyledFormAreaLanding,
    StyledButtonLanding,
    StyledButtonLanding2
} from "./../components/Styles";


//logo
import Logo from "./../assets/logo.png";
import {sessionService} from 'redux-react-session';
import axios from 'axios';

//auth & redux
import {connect} from 'react-redux';
import {logoutUser} from './../auth/actions/userActions';

//React router
import {useNavigate} from 'react-router-dom';

export function Workouts() { 
    console.log("asad")    
    const history = useNavigate();
    //const session = sessionService;
    sessionService.loadSession()
    .then(token => {
        console.log(token);
    axios.get("https://sweatcheck.herokuapp.com/api/workouts/all", 
    
    {
        headers: {
            "tok":token
        }
    } 
    ).then(resp => {
        const data = resp.data;
        //console.log(data);
        var i;
        var arr = [];
        for (i=0; i<data.length; i++){
            console.log(data[i].name);
            arr.push(data[i]._id);        
        }

        //console.log(arr);
        
//        return arr;
        
        
        //history("/exercises2", {state: data});
        //Exercises2(data, {});
        
        //console.log(arr);


        //console.log(arr);
        return data[0];
    
})
    
})
}
const Landing = ({logoutUser}) => {
    const history = useNavigate();
    const data = Workouts()
    console.log(data.name)
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
            }}>
                <TodoComponent>
                    <StyledSubTitleLanding size={30}>Sweat Check</StyledSubTitleLanding> 
                    <StyledButtonLanding to="/" onClick={() => logoutUser(history)}>Logout</StyledButtonLanding>
                </TodoComponent>
            </div>      
            
            <div>
            <ButtonGroup>
            <StyledButtonLanding2 to="/exercises2">Create New Workout</StyledButtonLanding2>
            </ButtonGroup>
            </div>

            <div>
            <StyledTitleLanding size={50}>Your Workouts</StyledTitleLanding>
            </div>
            <div>
                {data.map((index) => (
                    <div key={index}>
                    </div>
              ))}
        </div>

        </div>
    );
  
}

export default connect(null, {logoutUser})(Landing);